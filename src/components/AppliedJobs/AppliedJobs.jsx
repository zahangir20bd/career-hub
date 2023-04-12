import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [cart, setCart] = useState([]);

  // console.log(jobs);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const _id in storedCart) {
      const job = jobs.find((job) => job.id == _id);
      if (job) {
        saveCart.push(job);
      }
    }
    setCart(saveCart);
  }, [jobs]);

  // console.log(cart);
  return (
    <div>
      <Banner from="Applied Jobs"></Banner>
      <div className="max-w-6xl mx-auto my-32 px-2">
        {cart.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
