import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;
    try {
        const newTask = new Task({title, description, date, user: req.user.id});
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).populate('user');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


export const getOneTask = async (req, res) => {
    const foundTask = await Task.findById(req.params.id).populate('user');
    if(!foundTask) return res.status(404).json({message: "Task not found"});
    res.json(foundTask);
}

export const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!updatedTask) return res.status(404).json({message: "Task not found"});
    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if(!deletedTask) return res.status(404).json({message: "Task not found"});
    return res.sendStatus(204);
}