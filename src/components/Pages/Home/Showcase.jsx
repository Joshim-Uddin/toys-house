/* eslint-disable react/no-unescaped-entities */
import React from "react";
import imgOne from "./../../../assets/showcase/showcase1.jpg";
import imgTwo from "./../../../assets/showcase/showcase2.jpg";
import imgThree from "./../../../assets/showcase/showcase3.webp";
import imgFour from "./../../../assets/showcase/showcase4.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Showcase = () => {
  const layout = (
    <div className="absolute bg-gradient-to-r from-black w-full h-full flex flex-col items-center justify-center text-white">
      <div className="ps-16">
        <h2 className="text-4xl font-semibold w-1/3 mb-5">
          Discover the Best Car Toys
        </h2>
        <p className="w-1/2">
          Drive into endless fun with Toys House of Car! Discover a wide range
          of realistic and vibrant car toys that will ignite your child's
          imagination and keep them entertained for hours.
        </p>
        <button className="btn normal-case custom mt-5">
          <Link to="/alltoys">Visit All Toys</Link>
        </button>
      </div>
    </div>
  );
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={imgOne} className="w-full h-screen" />
        {layout}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide2" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={imgTwo} className="w-full h-screen" />
        {layout}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide3" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={imgThree} className="w-full h-screen" />
        {layout}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide4" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={imgFour} className="w-full h-screen" />
        {layout}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            <FaArrowLeft />
          </a>
          <a href="#slide1" className="btn btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
