import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: loginErrors } = useAuth();
    const onSubmit = handleSubmit((data) => {
        signin(data);
    });


  return (
    <main className="flex items-center justify-center h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-zinc-800 max-w-xs w-full p-10 rounded-md flex flex-col gap-2"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="bg-zinc-600 rounded-md px-2 flex flex-col">
          <label htmlFor="email" className="mt-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="youremailhere@gmail.com"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="bg-zinc-600 rounded-md px-2 flex flex-col">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Type your password here"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white rounded-md my-2" key={i}>
            {error}
          </div>
        ))}
        <button
          type="submit"
          className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      <p className="flex gap-x-2 justify-between mt-2">
        Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
      </p>
      </form>
    </main>
  );
}

export default LoginPage;
