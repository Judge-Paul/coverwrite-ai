const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { rateLimit } = require("express-rate-limit");
require("dotenv").config();

const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(["http://localhost:5173", "https://coverwrite.vercel.app"]));

function checkReferer(req, res, next) {
  const referer = req.get("referer");
  const allowedReferer = "https://coverwrite.vercel.app";

  if (referer && referer.startsWith(allowedReferer)) {
    next();
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
}

app.post("/generate", checkReferer, async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Prompt is required." });

  try {
    const result = await model.generateContent(prompt);
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
