import axios from "./axios";
import toast from 'react-hot-toast';

export const getTasksRequest = () => axios.get("/tasks");

export const getOneTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = async (task) => await axios.post("/tasks", task);

export const updateTaskRequest = (task) =>
  axios.put(`/tasks/${task._id}`, task);
  
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
