import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyDataTable from "./ToyDataTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/allname/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <div className="my-12">
      <h2 className="text-4xl my-8 font-bold text-center">List Of All Toys</h2>
      <div className="flex items-center justify-center my-5">
        {" "}
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          name="search"
          placeholder="Enter text"
          className="border focus:outline-none p-2"
        />
        <input
          type="submit"
          onClick={() => handleSearch(searchText)}
          value="Search"
          className="border p-2 cursor-pointer custom"
        />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-compact w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>
                  Available <br /> Quantity
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <ToyDataTable key={toy._id} toy={toy} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
