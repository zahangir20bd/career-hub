import React, { useState } from "react";
import Menu from "./Menu/Menu";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/statistics",
      name: "Statistics",
    },
    {
      id: 3,
      path: "/applied-jobs",
      name: "Applied Jobs",
    },
    {
      id: 4,
      path: "/blogs",
      name: "Blogs",
    },
  ];
  return (
    <div className="md:flex justify-between items-center max-w-6xl mx-auto p-2">
      <h2 className="text-2xl font-bold my-4">
        <Link to="/">CareerCrafters</Link>
      </h2>
      <nav>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-8 w-8 text-[#a746e7]" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-[#a746e7]" />
            )}
          </span>
        </div>
        <ul className={`md:flex md:gap-12 gap-2 ${open || "hidden "}`}>
          {routes.map((route) => (
            <Menu key={route.id} route={route}></Menu>
          ))}
        </ul>
      </nav>
      <button className="my-4 bg-gradient-to-r from-[#8895e7] to-[#c364db] p-3 rounded-md text-white font-semibold">
        <Link to="/">Start Applying</Link>
      </button>
    </div>
  );
};

export default Nav;
