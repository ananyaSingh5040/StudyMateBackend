import Note from "../models/Note.js";

// Get all notes for a user
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId });
    res.status(200).json(notes);
  } catch (err) {
    console.error("Fetch notes error:", err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { userId, date, title, description } = req.body;
    const newNote = await Note.create({ userId, date, title, description });
    res.status(201).json(newNote);
  } catch (err) {
    console.error("Create note error:", err);
    res.status(500).json({ error: "Failed to create note" });
  }
};

// Update a note
export const updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.noteId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    console.error("Update note error:", err);
    res.status(500).json({ error: "Failed to update note" });
  }
};

// Delete a note
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.noteId);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("Delete note error:", err);
    res.status(500).json({ error: "Failed to delete note" });
  }
};
