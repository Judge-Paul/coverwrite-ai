import { Context, Hono, Next } from "hono";
import * as cheerio from "cheerio";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "hono/adapter";
import { cors } from "hono/cors";
import { cloudflareRateLimiter } from "@hono-rate-limiter/cloudflare";

type RateLimiterType = {
	Variables: {
		rateLimit: boolean;
	};
	Bindings: {
		RATE_LIMITER: RateLimit;
	};
};

type ENV_VARS = {
	GOOGLE_API_KEY: string;
	BASE_PROMPT: string;
};

const rateLimiter = (c: Context, next: Next) =>
	cloudflareRateLimiter<RateLimiterType>({
		rateLimitBinding: c.env.RATE_LIMITER,
		keyGenerator: (c) => c.req.header("cf-connecting-ip") ?? "",
		handler: (_, next) => next(),
	})(c, next);

const app = new Hono();

app.use("/*", cors());
app.use("/generate", rateLimiter);

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
		console.error(error);
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
		const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

		const result = await model.generateContent(basePrompt + "\n" + prompt);

		const text = result.response.text();
		c.status(200);
		return c.json({ text: text });
	} catch (e) {
		console.error(e);
		c.status(500);
		return c.json({ error: "Error generating content" });
	}
});

export default app;
