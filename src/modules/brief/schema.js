import Joi from 'joi'

export const createRequestSchema = Joi.object({
    userAgent: Joi.string().optional(),
    type: Joi.string().required(),
    industry: Joi.string().required(),
    custom_prompt: Joi.string().optional()
})