import React, { useEffect, useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Categories from "../Categories/Categories";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";

const Home = () => {
  const jobCategories = useLoaderData();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <HomeBanner></HomeBanner>
      <Categories jobCategories={jobCategories}></Categories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
