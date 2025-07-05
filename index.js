import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config.js"; // make sure your DB file is renamed to db.js
import plannerRoutes from "./routes/plannerRoutes.js";
import doubtRoutes from "./routes/doubtRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";




dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is live!");
});

// API Routes
app.use("/api/planner", plannerRoutes);
app.use("/api/doubt", doubtRoutes);
app.use("/api/notes", noteRoutes);

// Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
