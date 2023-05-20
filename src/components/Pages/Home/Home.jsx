import React, { useEffect } from "react";
import Showcase from "./Showcase";
import ShopByCategory from "../ShopByCategory";
import ToyGallery from "./ToyGallery";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Showcase data-aos="fade-zoom-in" />
      <ShopByCategory data-aos="fade-left" />
      <ToyGallery data-aos="fade-down" />
    </>
  );
};

export default Home;
