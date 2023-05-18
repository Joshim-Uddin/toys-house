import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [active, setActive] = useState("");

  const url = active
    ? `http://localhost:5000/alltoys/${active}`
    : `http://localhost:5000/alltoys/text`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url, active]);
  const handleTab = (value) => {
    setActive(value);
  };
  return (
    <div>
      <h2 className="text-3xl text-center">Shop by Category</h2>
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
      <div className="grid lg:grid-cols-3 gap-5 my-8">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
