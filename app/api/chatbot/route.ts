import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // text model
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const text =
      response.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Error in chatbot API:", error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 500 }
    );
  }
}
