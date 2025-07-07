import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "https://streak-flow-mk6xkeanj-ravichandra-l-ss-projects.vercel.app",
      "https://streak-flow-8fuw0fry1-ravichandra-l-ss-projects.vercel.app/",
      "https://streak-flow-git-main-ravichandra-l-ss-projects.vercel.app/",
      "https://streak-flow.vercel.app",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: '2mb' }));

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/auth", authRoutes);

// Only export the handler for Vercel
export default app;
