import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>Main Layout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
