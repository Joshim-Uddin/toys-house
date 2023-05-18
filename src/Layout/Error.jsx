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
        <button className="btn btn-outline">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
