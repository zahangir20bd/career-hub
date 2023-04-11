import React, { useEffect, useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Categories from "../Categories/Categories";

import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Categories></Categories>
      <FeaturedJobs jobs={jobs}></FeaturedJobs>
    </div>
  );
};

export default Home;
