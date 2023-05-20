import React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
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

const ToyGallery = () => {
  const photos = [
    { src: `${carOne}`, width: 50, height: 50 },
    { src: `${carTwo}`, width: 50, height: 50 },
    { src: `${carThree}`, width: 50, height: 50 },
    { src: `${carFour}`, width: 50, height: 50 },
    { src: `${carFive}`, width: 50, height: 50 },
    { src: `${carSix}`, width: 50, height: 50 },
    { src: `${carSeven}`, width: 50, height: 50 },
    { src: `${carEight}`, width: 50, height: 50 },
    { src: `${carNine}`, width: 50, height: 50 },
    { src: `${carTen}`, width: 50, height: 50 },
    { src: `${carEleven}`, width: 50, height: 50 },
    { src: `${carTwelve}`, width: 50, height: 50 },
    { src: `${carThirteen}`, width: 50, height: 50 },
    { src: `${carFourteen}`, width: 50, height: 50 },
    { src: `${carFifteen}`, width: 50, height: 50 },
  ];
  return (
    <div className="my-12">
      <h3 className="text-4xl font-semibold text-center my-12">
        Toy Car Gallery
      </h3>
      <div className="bg-[#104460] p-5 shadow-lg shadow-slate-400">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </div>
  );
};

export default ToyGallery;
