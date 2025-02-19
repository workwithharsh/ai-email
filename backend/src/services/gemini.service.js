import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getGeminiEmail = async (feedback) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Email prompt
    const prompt = `Write a professional email based on this feedback: "${feedback}". 
      Ensure it's well-structured, includes a subject, and ends with "Best regards, Harsh Prakash".`;

    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response.trim();
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error("Failed to generate email");
  }
};
