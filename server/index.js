const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { rateLimit } = require("express-rate-limit");
const cheerio = require("cheerio");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const apiKey = process.env.API_KEY;
const basePrompt = process.env.BASE_PROMPT;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 3,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

function validateReferer(req, res, next) {
  const allowedReferer = "https://coverwrite.vercel.app";
  const referer = req.headers.referer;
  if (!referer || !referer.includes(allowedReferer)) {
    return res.status(403).send("Forbidden");
  }
  next();
}

app.get("/company-info", async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) {
      return res.status(400).json({ error: "URL parameter is required" });
    }

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const textContent = $("body").text();

    res.json({ text: textContent });
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ error: "Error fetching content" });
  }
});

app.post("/generate", validateReferer, async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Prompt is required." });

  try {
    const result = await model.generateContent(basePrompt + "\n" + prompt);
    const response = await result.response;
    const text = response.text();
    return res.status(200).json({ text });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
