import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values) => signup(values));

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <main className="flex items-center justify-center h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-zinc-800 max-w-md w-full p-10 rounded-md flex flex-col gap-2"
      >
        <h1 className="text-2xl font-bold">Register user</h1>
        <div className="bg-zinc-600 rounded-md px-2 flex flex-col">
          <label htmlFor="username" className="mt-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Type your username here"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}
        </div>
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
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white rounded-md" key={i}>
            {error}
          </div>
        ))}
        <button
          type="submit"
          className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Register
        </button>
        <p className="flex gap-x-2 justify-between mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;
