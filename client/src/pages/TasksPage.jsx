import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { loadTasks, tasks, } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [tasks]);

  console.log(tasks);

  return (
    <main className="bg-zinc-700 p-2 rounded-sm grid grid-rows-2 grid-cols-3 gap-2 m-5">
        {tasks.length > 0 ? (tasks.map((task) => (
          <TaskCard task={task} />))) : (<p className="text-center col-span-3 row-span-3 text-xl">No task to show</p>)
        }
    </main>
  );
}

export default TasksPage;
