import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAiMrKmAzyy0uFYknVgXdk3bFypxzp4gSo";
const genAi = new GoogleGenerativeAI(apiKey);

export const model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash-002",
  });

export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };