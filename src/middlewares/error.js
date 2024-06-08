import { logger } from "../utils/logger.js";

export function globalErrorHandler(err, req, res, next){
    logger.error(err.stack);
}

/**
 * Logs an error message when a requested resource is not found.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function in the stack.
 */
export function notFoundHandler(req, res, next){
    logger.error(`Not found: ${req.url}`);
}