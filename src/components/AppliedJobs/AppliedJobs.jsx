import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData, useParams } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const data = useParams();
  const storedCart = getShoppingCart();
  console.log(jobs);
  console.log(data);
  return (
    <div>
      <Banner from="Applied Jobs"></Banner>
      <h2>Applied Jobs</h2>
    </div>
  );
};

export default AppliedJobs;
