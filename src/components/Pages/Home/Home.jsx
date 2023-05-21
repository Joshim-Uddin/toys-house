import React, { useEffect } from "react";
import Showcase from "./Showcase";
import ShopByCategory from "./ShopByCategory";
import ToyGallery from "./ToyGallery";
import useTitle from "../../Hooks/useTitle";
import ClientReview from "./ClientReview";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Showcase />
      <ToyGallery />
      <ShopByCategory />
      <ClientReview />
    </>
  );
};

export default Home;
