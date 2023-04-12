import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-[#7e8ffe2d] to-[#9873ff28]  flex-col h-[100vh] w-full">
      <div className="bg-gray-200 p-20 rounded-xl text-center">
        <h2 className="text-6xl font-bold">Oppos...!</h2>
        <h3 className="text-3xl font-semibold mt-4">
          404 Error - Page Not Found
        </h3>
        <p className="mt-6 max-w-sm">
          Sorry, it looks like something went wrong. Our team has been notified
          and we're working to fix the issue as soon as possible. Please try
          again later or contact us if the problem persists. Thank you for your
          patience and understanding.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
