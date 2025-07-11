import dotenv from "dotenv";
dotenv.config();

import axios from "axios";

const solveDoubt = async (req, res) => {
  const { question } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Answer this doubt in simple terms using markdown formatting. Use **bold**, bullet points, and \`\`\`code blocks\`\`\` if needed.
            Doubt: ${question}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const answer = response.data.choices[0].message.content;
    res.status(200).json({ answer });
  } catch (error) {
    console.error("OpenRouter error:", error.response?.data || error.message);
    res.status(500).json({ error: "AI model failed to respond." });
  }
};

export { solveDoubt };
