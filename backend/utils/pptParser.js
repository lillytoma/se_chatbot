const { OpenAI } = require("openai");
require("dotenv").config();
const slidesData = require("../data/slidesData.json");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateAnswerFromPPT(question) {
  // Create context strictly from slides
  const context = slidesData.map(slide => slide.text).join("\n");

  const prompt = `
You are an assistant that answers questions ONLY using content from the PowerPoint slides below.

If the answer is not in the slides, respond with:
"I couldn't find that information in the slides."

Slides:
${context}

Question: ${question}
Answer:
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 500,
    temperature: 0.2,
  });

  return completion.choices[0].message.content.trim();
}

module.exports = { generateAnswerFromPPT };
