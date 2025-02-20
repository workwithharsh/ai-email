import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// Import Routes
import emailRoutes from "./routes/email.route.js";
import geminiRoutes from "./routes/gemini.route.js";

dotenv.config();

const app = express();

// Middleware Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health Check Route
app.get("/", (req, res) => {
  res.send("AI Email Generator API is running...");
});

// Routes
app.use("/api/v1/gemini", geminiRoutes);
app.use("/api/v1/email", emailRoutes);

export { app };
