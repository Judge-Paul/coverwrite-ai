const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
require("dotenv").config();

const app = express();
const port = 3000;

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(["http://localhost:5173", "https://coverwrite.vercel.app"]));

app.post("/generate", (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Prompt is required." });
  client
    .generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    })
    .then((result) => {
      res.status(200).json({ status: "Success", result });
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while generating text." });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
