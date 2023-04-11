import React from "react";
import Nav from "../Nav/Nav";

const Banner = ({ from }) => {
  return (
    <div className="bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]  relative min-h-[150px]">
      <img
        className="left-[0px] top-[87px] hidden md:block absolute max-w-[200px]"
        src="Vector.png"
        alt=""
      />
      <img
        className="right-[0px]  absolute max-w-[150px]"
        src="Vector-1.png"
        alt=""
      />
      <Nav></Nav>
      <h2 className="text-center text-3xl font-bold mt-10 pb-10">{from}</h2>
    </div>
  );
};

export default Banner;
