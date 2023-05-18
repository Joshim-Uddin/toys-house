import React from "react";
import Lottie from "lottie-react";
import notfound from "./notfound.json";
import { Link } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <Lottie animationData={notfound} loop={true} className="h-5/6" />
      <div className="flex gap-2">
        <BsArrowReturnLeft className="text-2xl font-bold" />
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/">Back to Home</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Error;
