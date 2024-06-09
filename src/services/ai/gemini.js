import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../../utils/config.js";

const genAI = new GoogleGenerativeAI(config.GOOGLE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export default model;
