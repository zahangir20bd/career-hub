import React from "react";
import Nav from "../Nav/Nav";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]  relative min-h-[150px]">
      <img
        className="left-[0px] top-[94px] hidden md:block absolute max-w-[90px]"
        src="Vector.png"
        alt=""
      />
      <img
        className="right-[0px]  absolute max-w-[90px]"
        src="Vector-1.png"
        alt=""
      />
      <Nav></Nav>
    </div>
  );
};

export default Banner;
