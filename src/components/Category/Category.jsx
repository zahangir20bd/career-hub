import React from "react";

const Category = ({ jobCategory }) => {
  console.log(jobCategory);
  const { id, icon, job_title, vacancy } = jobCategory;
  return (
    <div className="border-2 p-6 rounded-lg bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]">
      <img className="w-14" src={icon} alt="category icon" />
      <h3 className="my-4 text-2xl font-bold">{job_title}</h3>
      <p>{vacancy}</p>
    </div>
  );
};

export default Category;
