// controllers/taskController.js
const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({data:tasks});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;
    try {
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        const task = new Task({
            title,
            description,
            status
        });
        const newTask = await task.save();
        res.status(201).json({data:newTask});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, status }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({data:updatedTask});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

