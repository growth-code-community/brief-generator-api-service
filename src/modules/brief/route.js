import express from 'express';
import { createBriefRequest } from './controller.js';
const brief = express.Router();

brief.post('/', createBriefRequest)

export default brief;