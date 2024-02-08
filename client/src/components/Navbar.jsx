import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              <span className="font-bold m-2">Welcome</span>
              {user.username}
            </li>
            <li>
              <Link to="/tasks" className="bg-teal-500 px-4 py-2 rounded-sm">
                My tasks
              </Link>
            </li>
            <li>
              <Link
                to="/tasks/new"
                className="bg-indigo-600 px-4 py-2 rounded-sm"
              >
                Add Task
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => logout()}
                className="bg-red-600 px-4 py-2 rounded-sm"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-600 px-4 py-2 rounded-sm">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="bg-lime-600 px-4 py-2 rounded-sm">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
