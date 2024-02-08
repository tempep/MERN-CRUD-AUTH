import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
} from "../api/tasks";
import toast from "react-hot-toast";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    try {
      toast.promise(createTaskRequest(task), {
        loading: "Saving task...",
        success: "Task created successfully",
        error: "Something went bad, please check the console.",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const loadTasks = async () => {
    try {
      const res = await getTasksRequest();
      console.log(res);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      // Mañana hacer el confirm button para borrar la tarea --------------------------------------------
      toast((t) => (
        <span>
          Custom and <b>bold</b>
          <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
        </span>
      ));

      toast.promise(deleteTaskRequest(id), {
        loading: "Deleting task...",
        success: "Task deleted successfully",
        error: "Something went bad, please check the console.",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        loadTasks,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
