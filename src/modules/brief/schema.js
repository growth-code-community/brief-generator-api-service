import Joi from 'joi'

export const createRequestSchema = Joi.object({
    type: Joi.string().required(),
    industry: Joi.string().required(),
    custom_prompt: Joi.string().optional()
})