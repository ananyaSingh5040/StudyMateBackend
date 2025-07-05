import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Untitled Note",
  },
  description: {
    type: String,
    default: "",
  },
}, {
  timestamps: true,
});

const Note = mongoose.model("Note", noteSchema);
export default Note;
