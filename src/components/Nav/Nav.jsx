import React from "react";
import Menu from "./Menu/Menu";

const Nav = () => {
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
    <div className="md:flex justify-between items-center container mx-auto lg:px-14 p-2">
      <h2 className="text-2xl font-bold my-4">CareerCrafters</h2>
      <nav>
        <ul className="md:flex md:gap-12 gap-2 ">
          {routes.map((route) => (
            <Menu key={route.id} route={route}></Menu>
          ))}
        </ul>
      </nav>
      <button className="my-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-md text-white font-semibold">
        Start Applying
      </button>
    </div>
  );
};

export default Nav;
