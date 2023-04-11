import React, { useEffect, useState } from "react";
import FeatureJob from "../../FeatureJob/FeatureJob";

const FeaturedJobs = ({ jobs }) => {
  const [featureJobs, setFeatureJobs] = useState(jobs);
  useEffect(() => {
    let newJobs = jobs.slice(0, 4);
    setFeatureJobs(newJobs);
  }, []);

  const seeAllButtonHandler = () => {
    setFeatureJobs(jobs);
  };
  return (
    <div className="max-w-6xl mx-auto mt-32 px-2 ">
      <h2 className="text-5xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center mt-6">
        Explore thousands of job opportunities with all the information you
        need. it's your future.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {featureJobs.map((featureJob) => (
          <FeatureJob key={featureJob.id} data={featureJob}></FeatureJob>
        ))}
      </div>
      <div className="text-center mt-6 mb-20">
        <button
          onClick={seeAllButtonHandler}
          className={`center bg-gradient-to-r from-[#6979dd] to-[rgb(202,77,233)] p-3 rounded-md text-white font-semibold
            `}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
