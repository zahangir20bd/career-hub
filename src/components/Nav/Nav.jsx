import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h2>CareerCrafters</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/applied-jobs">Applied Jobs</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
      <button>Start Applying</button>
    </div>
  );
};

export default Nav;
