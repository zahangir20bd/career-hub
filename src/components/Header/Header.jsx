import React from "react";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto md:flex justify-between items-center px-2">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold">
          Take the first <br />
          step towards a
          <br />
          <span className="bg-gradient-to-r from-[#4358e2] to-[#a720c9] text-transparent bg-clip-text">
            brighter future.
          </span>
        </h1>
        <p className="mt-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
      </div>
      <img className="max-h-[550px]" src="image1.png" alt="" />
    </div>
  );
};

export default Header;
