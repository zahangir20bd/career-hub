import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const FeatureJob = ({ data }) => {
  const {
    company_logo,
    job_title,
    company_name,
    job_site,
    job_type,
    location,
    salary,
  } = data;
  return (
    <div className="border-2 p-4 rounded-lg">
      <img className="max-w-[100px]" src={company_logo} alt="" />
      <h2 className="text-3xl text-gray-600 font-bold mt-4">{job_title}</h2>
      <h3 className="text-lg text-gray-600 font-semibold my-2">
        {company_name}
      </h3>
      <div className="flex items-center gap-3">
        <p className="border-[1px] py-1 px-2 border-indigo-500 rounded bg-gradient-to-r from-[#4358e2] to-[#a720c9] text-transparent bg-clip-text">
          {job_site}
        </p>
        <p className="border-[1px] py-1 px-2 border-indigo-500 rounded bg-gradient-to-r from-[#4358e2] to-[#a720c9] text-transparent bg-clip-text">
          {job_type}
        </p>
      </div>
      <div className="flex items-center gap-6 my-3 text-gray-500">
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-5 w-5" />
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <CurrencyDollarIcon className="h-5 w-5" />
          <p>Salary: {salary}</p>
        </div>
      </div>
      <button className=" bg-gradient-to-r from-[#6979dd] to-[rgb(202,77,233)] p-3 rounded-md text-white font-semibold">
        View Details
      </button>
    </div>
  );
};

export default FeatureJob;
