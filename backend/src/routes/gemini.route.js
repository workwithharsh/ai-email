import express from "express";
import { generateEmail } from "../controllers/gemini.controller.js";

const router = express.Router();

// Gemini Routes
router.post("/generate", generateEmail);

export default router;
