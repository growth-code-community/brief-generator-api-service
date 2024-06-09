import express from 'express';
import { createBrief } from './controller.js';
const brief = express.Router();

brief.post('/', createBrief)

export default brief;