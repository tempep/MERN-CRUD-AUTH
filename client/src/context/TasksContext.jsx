import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";


export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error ("useTasks must be used within a TaskProvider");
    }
    return context;
}

export function TaskProvider({children}){
    const [tasks, setTasks] = useState([]);

    const createTask = async (task) => {
        try {
            console.log(task);
            const res = await createTaskRequest(task);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    const loadTasks = async () => {
        try {
            const res = await getTasksRequest();
            console.log(res);
            setTasks(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            loadTasks
        }}
        >
            {children}
        </TaskContext.Provider>
    )
}