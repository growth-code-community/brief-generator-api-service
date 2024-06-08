import express from "express";
import { respond } from "./src/utils/respond.js";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./src/middlewares/error.js";
import { logger } from "./src/utils/logger.js";
import swaggerUi from "swagger-ui-express";
import fs from 'fs';
import YAML from 'yaml';
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
const file = fs.readFileSync('docs/api.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/generate-brief", brief);

app.use(globalErrorHandler);
app.use(notFoundHandler);

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
