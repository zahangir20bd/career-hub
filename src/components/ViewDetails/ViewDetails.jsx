import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { addToDb } from "../../utilities/fakedb";

const ViewDetails = () => {
  const jobs = useLoaderData();
  const data = useParams();
  const [cart, setCart] = useState([]);
  const specificJob = jobs.find((job) => job.id == data.jobID);

  const {
    id,
    job_description,
    job_responsibility,
    education,
    experiences,
    salary,
    job_title,
    phone,
    email,
    location,
  } = specificJob;

  const handleAddToCart = (product) => {
    let newCart = [];

    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div>
      <Banner from="View Details"></Banner>
      <div className="max-w-6xl mx-auto my-32 px-2 md:flex gap-6">
        <div className="max-w-3xl">
          <p className="mb-4">
            <span className="font-bold">Job Description: </span>{" "}
            {job_description}
          </p>
          <p className="mb-4">
            <span className="font-bold">Job Responsibility: </span>{" "}
            {job_responsibility}
          </p>
          <p className="font-bold mb-4">Educational Requirements:</p>
          <p className="mb-4">{education}</p>
          <p className="font-bold mb-4">Experiences:</p>
          <p className="mb-4">{experiences}</p>
        </div>
        <div className="w-full">
          <div className="p-5 bg-gradient-to-r from-[#d467f52d] to-[#e879f728] rounded-lg">
            <h2 className="font-bold mb-3 text-lg">Job Details</h2>
            <hr className="bg-purple-300 text-purple-300 border-purple-300 h-[1px]" />
            <div className="flex items-center gap-1 my-4">
              <CurrencyDollarIcon className="h-5 w-5 text-[#cb70f5]" />
              <p className=" text-[#757575]">
                <span className="font-bold">Salary:</span>{" "}
                <span className="font-semibold"> {salary} (Per Month)</span>
              </p>
            </div>
            <div className="flex items-center gap-1 my-4">
              <BriefcaseIcon className="h-5 w-5 text-[#cb70f5]" />
              <p className=" text-[#757575]">
                <span className="font-bold">Job Title:</span>{" "}
                <span className="font-semibold">{job_title}</span>
              </p>
            </div>
            <h2 className="font-bold text-lg pt-3 mb-3">Contact Information</h2>
            <hr className="bg-purple-300 text-purple-300 border-purple-300 h-[1px]" />
            <div className="flex items-center gap-1 my-4">
              <PhoneIcon className="h-5 w-5 text-[#cb70f5]" />
              <p className="text-[#757575]">
                <span className="font-bold">Phone: </span>
                <span className="font-semibold"> {phone}</span>
              </p>
            </div>
            <div className="flex items-center gap-1 my-4">
              <EnvelopeIcon className="h-5 w-5 text-[#cb70f5]" />
              <p className="text-[#757575]">
                <span className="font-bold">Email: </span>
                <span className="font-semibold"> {email}</span>
              </p>
            </div>
            <div className="flex items-center gap-1 my-4">
              <MapPinIcon className="h-5 w-5 text-[#cb70f5]" />
              <p className="text-[#757575]">
                <span className="font-bold">Address: </span>
                <span className="font-semibold"> {location}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(specificJob)}
            className="w-full text-lg mt-4 bg-gradient-to-r from-[#6979dd] to-[rgb(202,77,233)] p-3 rounded-md text-white font-semibold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
