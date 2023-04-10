import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="md:flex justify-between items-center container mx-auto lg:px-14 p-2">
      <h2 className="text-2xl font-bold my-4">CareerCrafters</h2>
      <nav className="flex flex-col gap-2 md:flex-row md:gap-10">
        <Link className=" hover:text-indigo-500" to="/">
          Home
        </Link>
        <Link className=" hover:text-indigo-500" to="/statistics">
          Statistics
        </Link>
        <Link className=" hover:text-indigo-500" to="/applied-jobs">
          Applied Jobs
        </Link>
        <Link className=" hover:text-indigo-500" to="/blogs">
          Blogs
        </Link>
      </nav>
      <button className="my-4 bg-indigo-400 p-3 rounded-md text-white font-semibold">
        Start Applying
      </button>
    </div>
  );
};

export default Nav;
