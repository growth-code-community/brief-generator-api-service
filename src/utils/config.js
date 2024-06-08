import  dotenv from 'dotenv'
dotenv.config();

export const config = {
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_GEMINI_API_KEY: process.env.GOOGLE_GEMINI_API_KEY,
    GOOGLE_GEMINI_generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      }
}