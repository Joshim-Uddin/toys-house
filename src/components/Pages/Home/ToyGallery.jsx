import React, { useEffect, useState } from "react";
import carOne from "./../../../assets/gallery/car7.png";
import carTwo from "./../../../assets/gallery/car8.png";
import carThree from "./../../../assets/gallery/car9.png";
import carFour from "./../../../assets/gallery/car10.png";
import carFive from "./../../../assets/gallery/car11.png";
import carSix from "./../../../assets/gallery/car13.png";
import carSeven from "./../../../assets/gallery/car14.png";
import carEight from "./../../../assets/gallery/car15.png";
import carNine from "./../../../assets/gallery/car16.png";
import carTen from "./../../../assets/gallery/car17.png";
import carEleven from "./../../../assets/gallery/truck1.png";
import carTwelve from "./../../../assets/gallery/truck2.png";
import carThirteen from "./../../../assets/gallery/truck3.png";
import carFourteen from "./../../../assets/gallery/truck4.png";
import carFifteen from "./../../../assets/gallery/truck7.png";
import Aos from "aos";

const ToyGallery = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const photos = [
    { src: `${carOne}`, name: "Simple Car" },
    { src: `${carTwo}`, name: "Sports King" },
    { src: `${carThree}`, name: "Busy Bond" },
    { src: `${carFour}`, name: "Toyota Royals" },
    { src: `${carFive}`, name: "Hahate Mai" },
    { src: `${carSix}`, name: "Render Pask" },
    { src: `${carSeven}`, name: "Suzuki" },
    { src: `${carEight}`, name: "Ferrari" },
    { src: `${carNine}`, name: "Truck" },
    { src: `${carTen}`, name: "Super Sonic" },
    { src: `${carEleven}`, name: "Speed Kill" },
    { src: `${carTwelve}`, name: "Race Hunter" },
    { src: `${carThirteen}`, name: "Manila" },
    { src: `${carFourteen}`, name: "Toyota Crown" },
    { src: `${carFifteen}`, name: "Entemsy" },
  ];
  return (
    <div
      className="my-12 custom-container overflow-x-hidden"
      data-aos="zoom-out"
    >
      <h3 className="text-4xl font-semibold text-center my-12">
        Toy Car Gallery
      </h3>
      <div className="bg-[#7A1F2B] px-5 py-8 shadow-lg grid lg:grid-cols-4 grid-cols-1 gap-5 items-center shadow-slate-400">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="bg-slate-100 p-2 lg:transition lg:ease-in lg:hover:scale-110 duration-300 rounded-lg h-64 relative"
          >
            <img src={photo.src} alt="" className="w-full h-full" />
            <div className="absolute top-0 left-0 rounded-lg bg-white transition-opacity opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center">
              <p className="opacity-100 text-2xl font-bold text-black">
                {photo.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyGallery;
