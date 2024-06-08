import express from "express";
import { respond } from "./src/utils/respond.js";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./src/middlewares/error.js";
import { logger } from "./src/utils/logger.js";
import cors from "cors";
import helmet from "helmet";
import { connectToDatabase } from "./src/utils/database.js";
import brief from "./src/modules/brief/route.js";
const app = express();
const port = process.env.PORT || 3000;

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  return respond(res, 200, "brief generator is ready to serve 🚀🚀");
});

app.use("/v1/brief", brief);

app.use(globalErrorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
