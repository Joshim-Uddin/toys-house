import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import MyToyDataTable from "./MyToyDataTable";
import useTitle from "../Hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/alltoy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  //Delete a toy function
  const deleteOpt = (id) => {
    const remaining = mytoys.filter((t) => t._id != id);
    setMyToys(remaining);
  };

  //sort by price function
  const handleSortByPrice = (e) => {
    const value = e.target.value;
    fetch(`http://localhost:5000/alltoy?email=${user?.email}&sort=${value}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  return (
    <div className="my-12">
      <h2 className="my-8 text-4xl font-semibold text-center">My Toys</h2>
      <div className="mb-8 text-right me-4">
        <label htmlFor="sort by price">Sort by price</label>
        <select
          name="sort by price"
          id="sort by price"
          className="ms-3 border border-black p-2"
          onChange={handleSortByPrice}
        >
          <option value="1">Low to High</option>
          <option value="-1">High to Low</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra table-compact w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th></th>

              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mytoys?.map((toy, index) => (
              <MyToyDataTable
                key={toy._id}
                toy={toy}
                index={index}
                deleteOpt={deleteOpt}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
