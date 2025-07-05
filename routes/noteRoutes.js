import express from "express";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/:userId", getNotes);
router.post("/", createNote);
router.patch("/:noteId", updateNote);
router.delete("/:noteId", deleteNote);

export default router;
