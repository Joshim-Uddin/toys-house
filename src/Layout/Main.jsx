import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
