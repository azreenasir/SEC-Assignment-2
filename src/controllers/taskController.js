const { User, Task } = require("../models");

// create task
const createTask = async function (req, res) {
  try {
    const { title, description, dueDate, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Title and userId are required" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const task = await Task.create({ title, description, dueDate, userId });
    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ message: "Failed to create task" });
  }
};

// get all tasks
const getTasks = async function (req, res) {
  try {
    const tasks = await Task.findAll({ include: User });
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// Get task by id
async function getTaskById(req, res) {
  try {
    const task = await Task.findByPk(req.params.id, { include: User });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch task" });
  }
}

// update task
async function updateTask(req, res) {
  try {
    const { title, description, status, dueDate } = req.body;
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (status && !["pending", "completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    await task.update({ ...task, title, description, status, dueDate });

    return res.json(task);
  } catch (err) {
    return res.status(500).json({ message: "Failed to update task" });
  }
}

// delete task
async function deleteTask(req, res) {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: "Failed to delete task" });
  }
}

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
