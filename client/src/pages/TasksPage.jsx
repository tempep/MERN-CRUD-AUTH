import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { useAuth } from "../context/AuthContext";

function TasksPage() {
  const { loadTasks, tasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  console.log(tasks);

  return (
    <div className="flex justify-center gap-3 m-3">
      {tasks.map(task => (
        <div className="bg-zinc-800 p-10 rounded-md border border-white transition ease-in-out delay-150 hover:scale-110" key={task._id}>
          <p className="text-2xl">{task.title}</p>
          <p className="text-center">{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
