import express from "express";
import { savePlanner, getPlanner, updateTask, deleteTask } from "../controllers/plannerController.js";

const router = express.Router();

// POST - Save planner
router.post("/save", savePlanner);

// GET - Get planner by userId
router.get("/:userId", getPlanner);
router.patch("/:userId/:taskId", updateTask);  
router.delete("/:userId/:taskId", deleteTask);

export default router;
