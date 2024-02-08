import React from "react";
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const date = new Date(task.date * 1000);
  const formattedDate = new Date(date.toISOString());
  
  return (
    <div
      className="bg-zinc-800 p-10 rounded-md border border-white transition ease-in-out delay-150 hover:scale-110 grid grid-rows-3"
      key={task._id}
    >
      <p className="text-2xl">{task.title}</p>
      <p className="text-center overflow-auto text-slate-300">
        {task.description}
      </p>
      <p>{`${new Date(task.createdAt).toLocaleDateString()} - ${new Date(task.createdAt).toLocaleTimeString()}`}</p>
      <div className="w-full p-1 rounded-sm flex gap-5 justify-end">
        <button onClick={() => deleteTask(task._id)}>
          <FiTrash2 color="red" size="2em" />
        </button>
        <button >
          <FiEdit2 color="yellow" size="2em" />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
