
import { GoogleGenAI, Type } from "@google/genai";

export const getAIResponse = async (query: string, type: 'HEALTH' | 'CAREER' | 'GENERAL') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const systemInstructions = {
    HEALTH: "You are a professional medical assistant for the Indian Bharat Helpline. Provide clear, empathetic basic health advice based on standard Indian medical guidelines. ALWAYS include a disclaimer: 'Note: This is AI-generated advice. For emergencies, dial 112/102 immediately or visit a hospital.' Format with bullet points where possible.",
    CAREER: "You are a career counselor specializing in Indian education and the job market. Advice on competitive exams (UPSC, SSC, JEE, NEET), skill development, and career paths in India. Keep answers structured and inspiring.",
    GENERAL: "You are Rakshak AI, the official information assistant for the Bharat Helpline app. You provide accurate info on Indian government portals, public services, and emergency procedures. Be professional, concise, and helpful."
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: systemInstructions[type],
        temperature: 0.6,
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm unable to connect to our information servers right now. Please refer to the official government websites or call the direct helpdesk numbers listed in the app.";
  }
};
