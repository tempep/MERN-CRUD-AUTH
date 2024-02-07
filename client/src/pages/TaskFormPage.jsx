import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <main className="h-screen flex justify-center items-center">
      <form className="bg-zinc-800 p-10 rounded-md" onSubmit={onSubmit}>
        <div className="bg-zinc-600 rounded-md px-2 flex flex-col w-full">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            autoFocus
            placeholder="Type your title"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
        </div>
        <div className="bg-zinc-600 rounded-md px-2 flex flex-col w-full my-2">
          <label htmlFor="description">
            Description
          </label>
        <textarea
          rows="3"
          id="description"
          placeholder="Type your description here"
          {...register("description")}
          className="bg-zinc-700 text-white my-2 w-full px-2 rounded-md"
          ></textarea>
          </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </form>
    </main>
  );
}

export default TaskFormPage;
