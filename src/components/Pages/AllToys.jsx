import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyDataTable from "./ToyDataTable";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="my-12">
      <h2 className="text-4xl my-8 font-bold text-center">List Of All Toys</h2>
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
