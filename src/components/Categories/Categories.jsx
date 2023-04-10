import React, { useEffect } from "react";
import Category from "../Category/Category";

const jobCategories = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/512/545/545885.png",
    job_title: "Account & Finance",
    vacancy: "300 Jobs Available",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/2421/2421271.png",
    job_title: "Creative Design",
    vacancy: " 100+ Jobs Available",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/1968/1968750.png",
    job_title: "Marketing & Sales",
    vacancy: "150 Jobs Available",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103607.png",
    job_title: "Engineering Job",
    vacancy: "224 Jobs Available",
  },
];

const Categories = () => {
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
