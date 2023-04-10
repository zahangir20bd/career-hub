import React from "react";
import Category from "../Category/Category";

const Categories = ({ jobCategories }) => {
  return (
    <div className="max-w-7xl mx-auto mt-32 px-2">
      <h2 className="text-5xl font-bold text-center">Job Category List</h2>
      <p className="text-center mt-6">
        Explore thousands of job opportunities with all the information you
        need. it's your future.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mt-10 gap-4 ">
        {jobCategories.map((jobCategory) => (
          <Category key={jobCategory.id} jobCategory={jobCategory}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
