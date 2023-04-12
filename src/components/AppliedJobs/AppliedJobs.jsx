import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fakedb";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [cart, setCart] = useState([]);

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

  const findRemote = () => {
    const remoteJobs = cart.filter((job) => job.job_site == "Remote");
    setCart(remoteJobs);
  };

  const findOnsite = () => {
    const onsiteJobs = cart.filter((job) => job.job_site == "Onsite");
    setCart(onsiteJobs);
  };

  const findFullTime = () => {
    const fullTimeJobs = cart.filter((job) => job.job_type == "Full-time");
    setCart(fullTimeJobs);
  };
  const findPartTime = () => {
    const partTimeJobs = cart.filter((job) => job.job_type == "Part-time");
    setCart(partTimeJobs);
  };

  return (
    <div>
      <Banner from="Applied Jobs"></Banner>
      <div className="max-w-6xl mx-auto my-32 px-2">
        <div className="text-right">
          <button
            onClick={findRemote}
            className=" mr-2 bg-gradient-to-r from-[#6979dd] to-[#ca4de9] p-3 rounded-md text-white font-semibold"
          >
            Remote
          </button>
          <button
            onClick={findOnsite}
            className=" mr-2 bg-gradient-to-r from-[#6979dd] to-[#ca4de9] p-3 rounded-md text-white font-semibold"
          >
            Onsite
          </button>
          <button
            onClick={findFullTime}
            className=" mr-2 bg-gradient-to-r from-[#6979dd] to-[#ca4de9] p-3 rounded-md text-white font-semibold"
          >
            Full Time
          </button>
          <button
            onClick={findPartTime}
            className=" mr-2 bg-gradient-to-r from-[#6979dd] to-[#ca4de9] p-3 rounded-md text-white font-semibold"
          >
            Part Time
          </button>
        </div>
        {cart.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
