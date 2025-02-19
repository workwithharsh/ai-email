import { getGeminiEmail } from "../services/gemini.service.js";

export const generateEmail = async (req, res) => {
  try {
    const { feedback } = req.body;

    if (!feedback) {
      return res.status(400).json({ error: "Feedback is required." });
    }

    const emailContent = await getGeminiEmail(feedback);
    res.json({ emailContent });
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    res.status(500).json({ error: "Failed to generate email" });
  }
};
