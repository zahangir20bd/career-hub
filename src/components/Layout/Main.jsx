import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

const Main = () => {
  return (
    <div>
      <Banner></Banner>
      <h2>Main Layout</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
