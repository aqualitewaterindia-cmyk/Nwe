
import { GoogleGenAI, Type } from "@google/genai";

export const getAIResponse = async (query: string, type: 'HEALTH' | 'CAREER' | 'GENERAL') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const systemInstructions = {
    HEALTH: "You are a professional medical assistant providing basic advice. Always remind the user that this is not a substitute for professional medical help. Keep answers concise and helpful.",
    CAREER: "You are a career counselor in India. Provide guidance on education, competitive exams, and career paths suitable for the Indian job market.",
    GENERAL: "You are Rakshak AI, a helpful assistant for emergency and public services in India."
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: systemInstructions[type],
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try calling the emergency numbers directly.";
  }
};
