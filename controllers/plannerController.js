const Task = require("../models/Task");
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch the tasks" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, date } = req.body;
    const newTask = await Task.create({ title, date });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ err: "Failed to create task" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body, // could be title or completed status
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};

module.exports = {getTasks, createTask, updateTask, deleteTask};
