require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");



const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const cleanResponse = (text) => {
    return text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
};

const fallbackResponse = {
    phishingStatus: "Unknown",
    summary: "Summary unavailable.",
    category: "Other",
};

exports.analyzeURL = async (url) => {
    const prompt = `
You are a cybersecurity and web content analyzer.

Analyze this URL:

${url}

Return ONLY valid JSON.

Example:

{
  "phishingStatus":"Safe",
  "summary":"Official website for AI research and products.",
  "category":"Technology"
}

Rules:
- phishingStatus must be exactly one of:
  Safe
  Suspicious
  Malicious

- summary must be under 30 words.

- category must be one of:
  Technology
  Education
  Shopping
  News
  Finance
  Social Media
  Entertainment
  Health
  Government
  Travel
  Sports
  Food
  Other

Return ONLY JSON.
`;

    try {
        let response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        let text = cleanResponse(response.text);

        try {
            return JSON.parse(text);
        } catch (err) {
            console.log("Retrying AI response...");

            response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents:
                    prompt +
                    "\n\nYour previous response was invalid. Return ONLY valid JSON.",
            });

            text = cleanResponse(response.text);

            return JSON.parse(text);
        }
    } catch (error) {
        console.error("AI Service Error:");
        console.error(error);

        return fallbackResponse;
    }
};