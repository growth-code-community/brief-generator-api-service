import geminAIModel from "../../services/ai/gemini.js";
import { createPrompt } from "../../services/ai/prompt.js";
import { config } from "../../utils/config.js";
import { respond } from "../../utils/respond.js";
import { repository } from "./repository.js";
import { createRequestSchema } from "./schema.js";


/**
 * Creates a new brief request.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.body - The request body containing the brief request data.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<Object>} - The response containing the generated Gemini response.
 */
export async function createBriefRequest(req, res, next) {
  try {
    const validatedData = await createRequestSchema.validateAsync(req.body);
    await repository.createRequest(validatedData);
    const prompt = createPrompt(validatedData);
    const chatSession = geminAIModel.startChat({
      generationConfig: config.GOOGLE_GEMINI_generationConfig,
      history: [],
    });
    const geminiResult = await chatSession.sendMessage(prompt.data);
    const geminiResponse = geminiResult.response.text();
    return respond(res, 200, "Brief succesfully created", { geminiResponse });
  } catch (err) {
    next(err);
  }
}
