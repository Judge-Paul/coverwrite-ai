import { Hono } from "hono";
import * as cheerio from "cheerio";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "hono/adapter";

type ENV_VARS = {
	GOOGLE_API_KEY: string;
	BASE_PROMPT: string;
};

const app = new Hono();

app.get("/company-info", async (c) => {
	const url = c.req.query("url");
	if (!url) {
		return c.json({ error: "URL parameter is required" });
	}
	try {
		const res = await fetch(url);
		if (!res.ok) {
			c.status(500);
			return c.json({ error: "URL is not valid" });
		}
		const html = await res.text();
		const $ = cheerio.load(html);
		const textContent = $("body").text();

		return c.json({ text: textContent });
	} catch (error) {
		c.status(500);
		return c.json({ error: "Error fetching content" });
	}
});

app.post("/generate", async (c) => {
	try {
		const payload = await c.req.json();
		const prompt = payload?.prompt;

		if (!prompt) {
			c.status(400);
			return c.json({ error: "Prompt is required" });
		}

		const envs = env<ENV_VARS>(c);
		const apiKey = envs?.GOOGLE_API_KEY;
		const basePrompt = envs?.BASE_PROMPT;

		if (!apiKey) {
			c.status(400);
			return c.json({ error: "API Key is required" });
		}

		if (!basePrompt) {
			c.status(400);
			return c.json({ error: "Base Prompt is required" });
		}

		const genAI = new GoogleGenerativeAI(apiKey);
		const model = genAI.getGenerativeModel({ model: "gemini-pro" });

		const result = await model.generateContent(basePrompt + "\n" + prompt);

		const text = result.response.text();
		c.json({ text });
	} catch (e) {
		console.error(e);
		c.status(500);
		return c.json({ error: "Error generating content" });
	}
});

export default app;
