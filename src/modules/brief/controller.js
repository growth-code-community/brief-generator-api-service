import geminAIModel from "../../services/ai/gemini.js";
import { createPrompt } from "../../services/ai/prompt.js";
import { config } from "../../utils/config.js";
import { respond } from "../../utils/respond.js";
import { repository } from "./repository.js";
import { createRequestSchema } from "./schema.js";


/**
 * Creates a new brief request and generates a response using the Gemini AI model.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} req.body - The request body containing the brief data.
 * @param {Function} res - The HTTP response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - Resolves when the brief is successfully created and the response is sent.
 */
export async function createBrief(req, res, next) {
  try {
    const validatedData = await createRequestSchema.validateAsync(req.body);
    const brief = await repository.createRequest(validatedData);
    const prompt = createPrompt(validatedData);
    const chatSession = geminAIModel.startChat({
      generationConfig: config.GOOGLE_GEMINI_generationConfig,
      history: [],
    });
    const geminiResult = await chatSession.sendMessage(prompt.data);
    const geminiResponse = geminiResult.response.text();
    await repository.createResponse(brief.id, geminiResponse);
    return respond(res, 200, "Brief succesfully created", { geminiResponse });
  } catch (err) {
    next(err);
  }
}
