import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import Aos from "aos";
import { RotatingLines } from "react-loader-spinner";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleToy, setSingleToy] = useState();
  const [active, setActive] = useState("");

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const url = active
    ? `https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/alltoys/${active}`
    : `https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/alltoys/text`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [url, active]);
  const handleTab = (value) => {
    setActive(value);
  };
  const handleDetails = (id) => {
    const findToy = toys.find((toy) => toy._id == id);
    setSingleToy(findToy);
  };
  return (
    <div
      className="my-12 custom-container overflow-x-hidden"
      data-aos="zoom-in"
    >
      <h2 className="text-4xl text-center font-semibold mb-10">
        Shop by Category
      </h2>
      <div className="tab-container flex justify-center items-center my-5 w-full mx-auto ">
        <div
          className={
            active == "Regular Car"
              ? `p-2 bg-red-500 text-lg cursor-pointer text-white`
              : `p-2 bg-slate-300 border text-lg cursor-pointer`
          }
          onClick={() => handleTab("Regular Car")}
        >
          Regular Car
        </div>
        <div
          className={
            active == "Sports Car"
              ? `p-2 bg-red-500 text-lg cursor-pointer text-white`
              : `p-2 bg-slate-300 border text-lg cursor-pointer`
          }
          onClick={() => handleTab("Sports Car")}
        >
          Sports Car
        </div>
        <div
          className={
            active == "Truck"
              ? `p-2 bg-red-500 text-lg cursor-pointer text-white`
              : `p-2 bg-slate-300 border text-lg cursor-pointer`
          }
          onClick={() => handleTab("Truck")}
        >
          Truck
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center my-8">
          <RotatingLines
            strokeColor="#179de5"
            strokeWidth="8"
            animationDuration="0.75"
            width="120"
            visible={true}
          />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 px-2 my-8">
          {toys?.map((toy) => (
            <ToyCard
              key={toy._id}
              toy={toy}
              handleDetails={handleDetails}
              singleToy={singleToy}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
