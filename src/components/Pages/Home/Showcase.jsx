/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imgOne from "./../../../assets/showcase/one.jpg";
import imgTwo from "./../../../assets/showcase/two.jpg";
import imgThree from "./../../../assets/showcase/three.jpg";
import imgFour from "./../../../assets/showcase/five.jpg";
import imgFive from "./../../../assets/showcase/six.jpg";
import imgSix from "./../../../assets/showcase/seven.jpg";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Showcase = () => {
  const layout = (
    <div className="absolute bg-gradient-to-r from-black w-full h-full flex flex-col items-center justify-center text-white top-0">
      <div className="lg:ps-16 ps-2">
        <h2 className="text-4xl font-semibold lg:w-1/3 mb-5">
          Discover the Best Car Toys
        </h2>
        <p className="lg:w-1/2 max-[600px]:hidden">
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
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative">
          <img src={imgOne} className="w-full h-screen" />
          {layout}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={imgTwo} className="w-full h-screen" />
          {layout}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={imgThree} className="w-full h-screen" />
          {layout}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={imgFour} className="w-full h-screen" />
          {layout}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={imgFive} className="w-full h-screen" />
          {layout}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={imgSix} className="w-full h-screen" />
          {layout}
        </div>
      </SwiperSlide>
    </Swiper>
    // <div className="carousel w-full">
    //   <div id="slide1" className="carousel-item relative w-full">
    //     <img src={imgOne} className="w-full h-screen" />
    //     {layout}
    //     <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-5 bottom-1">
    //       <a href="#slide4" className="btn btn-circle">
    //         <FaArrowLeft />
    //       </a>
    //       <a href="#slide2" className="btn btn-circle">
    //         <FaArrowRight />
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide2" className="carousel-item relative w-full">
    //     <img src={imgTwo} className="w-full h-screen" />
    //     {layout}
    //     <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-5 bottom-1">
    //       <a href="#slide1" className="btn btn-circle">
    //         <FaArrowLeft />
    //       </a>
    //       <a href="#slide3" className="btn btn-circle">
    //         <FaArrowRight />
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide3" className="carousel-item relative w-full">
    //     <img src={imgThree} className="w-full h-screen" />
    //     {layout}
    //     <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-5 bottom-1">
    //       <a href="#slide2" className="btn btn-circle">
    //         <FaArrowLeft />
    //       </a>
    //       <a href="#slide4" className="btn btn-circle">
    //         <FaArrowRight />
    //       </a>
    //     </div>
    //   </div>
    //   <div id="slide4" className="carousel-item relative w-full">
    //     <img src={imgFour} className="w-full h-screen" />
    //     {layout}
    //     <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-5 bottom-1">
    //       <a href="#slide3" className="btn btn-circle">
    //         <FaArrowLeft />
    //       </a>
    //       <a href="#slide1" className="btn btn-circle">
    //         <FaArrowRight />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Showcase;
