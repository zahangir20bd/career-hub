import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJob = ({ appliedJob }) => {
  console.log(appliedJob);
  const {
    id,
    company_logo,
    job_title,
    company_name,
    job_site,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div>
      <div className="md:flex items-center gap-5 border-2 rounded-lg p-5 my-5">
        <div className="min-w-[200px] min-h-[200px] flex items-center justify-center bg-[#F4F4F4] rounded-lg">
          <img className="max-w-[100px]" src={company_logo} alt="" />
        </div>
        <div className="md:flex items-center justify-between w-full">
          <div>
            <h2 className="text-3xl text-gray-600 font-bold mt-4">
              {job_title}
            </h2>
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
          </div>
          <button className=" bg-gradient-to-r from-[#6979dd] to-[#ca4de9] p-3 rounded-md text-white font-semibold">
            <Link to={`/${id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
