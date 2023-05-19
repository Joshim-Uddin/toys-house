import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import MyToyDataTable from "./MyToyDataTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/alltoy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  const deleteOpt = (id) => {
    const remaining = mytoys.filter((t) => t._id != id);
    setMyToys(remaining);
  };
  return (
    <div className="my-12">
      <h2 className="my-8 text-4xl font-semibold text-center">My Toys</h2>
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
