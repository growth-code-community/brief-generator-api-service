import { config } from "./config.js";
import { logger } from "./logger.js";
import { connect } from "mongoose";

/**
 * Connects to the database using the configured database URL.
 *
 * @async
 * @function connectToDatabase
 * @returns {Promise<void>} - Resolves when the database connection is established, or rejects with an error.
 */
export async function connectToDatabase() {
  try {
    await connect(config.DATABASE_URL);
    logger.info("Database connected");
  } catch (err) {
    logger.error(`Datbase connection failed: ${err.stack}`);
  }
}
