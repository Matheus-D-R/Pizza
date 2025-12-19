
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getPizzaRecommendation(mood: string): Promise<{ pizza: string; reason: string }> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `O cliente está se sentindo: "${mood}". Recomende uma pizza baseada no menu (Calabresa, Frango com Catupiry, Portuguesa, Marguerita Gourmet) e dê um motivo divertido e persuasivo.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pizza: { type: Type.STRING, description: "Nome da pizza recomendada" },
            reason: { type: Type.STRING, description: "Motivo persuasivo da recomendação" }
          },
          required: ["pizza", "reason"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      pizza: "Calabresa Suprema",
      reason: "Porque ela nunca falha em alegrar o dia de ninguém!"
    };
  }
}
