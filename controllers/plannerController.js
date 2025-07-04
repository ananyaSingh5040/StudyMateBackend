import Planner from '../models/Planner.js';
import mongoose from 'mongoose';


// POST - Save planner entries (bulk insert)
export const savePlanner = async (req, res) => {
  try {
    const { userId, tasks } = req.body;

    if (!Array.isArray(tasks) || tasks.length === 0) {
      return res.status(400).json({ error: "No tasks provided" });
    }

    // First, delete any existing planner for this user
    await Planner.deleteMany({ userId });

    // Create a new planner doc with all tasks
    const newPlanner = new Planner({
      userId,
      tasks
    });

    const savedPlanner = await newPlanner.save();

    res.status(201).json(savedPlanner.tasks); // ✅ this sends the saved tasks with _ids
  } catch (err) {
    console.error("Save planner error:", err);
    res.status(500).json({ error: "Failed to save planner" });
  }
};


// GET - Fetch all planner entries for a user
export const getPlanner = async (req, res) => {
  try {
    const { userId } = req.params;

    const planner = await Planner.findOne({
      userId: new mongoose.Types.ObjectId(userId) // 👈 force-cast to match DB
    });

    if (!planner) return res.status(200).json([]); // return empty array if not found

    res.status(200).json(planner.tasks); // ✅ send only tasks
  } catch (err) {
    console.error("Fetch planner error:", err);
    res.status(500).json({ error: "Failed to fetch planner" });
  }
};
export const updateTask = async (req, res) => {
  const { userId, taskId } = req.params;
  const updates = req.body;

  try {
    const planner = await Planner.findOne({ userId: new mongoose.Types.ObjectId(userId) });
if (!planner) return res.status(404).json({ error: "Planner not found" });

const task = planner.tasks.id(taskId);
if (!task) return res.status(404).json({ error: "Task not found" });

// Update only provided fields
Object.keys(updates).forEach(key => {
  task[key] = updates[key];
});

await planner.save();
res.status(200).json(planner);

  } catch (err) {
    console.error("Update task error:", err);
    res.status(500).json({ error: "Failed to update task" });
  }
};
export const deleteTask = async (req, res) => {
  const { userId, taskId } = req.params;

  try {
    const updated = await Planner.findOneAndUpdate(
      { userId },
      { $pull: { tasks: { _id: taskId } } },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Task not found" });

    res.status(200).json(updated);
  } catch (err) {
    console.error("Delete task error:", err);
    res.status(500).json({ error: "Failed to delete task" });
  }
};



