import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";

const ToyDataTable = ({ toy, index }) => {
  const { user } = useContext(AuthContext);
  const { seller, price, availableQuantity, subCategory, name, _id } = toy;
  const handleViewDetails = () => {
    if (!user) {
      toast.error("You are not logged in");
      return <Navigate to="/login"></Navigate>;
    }
  };
  return (
    <>
      <Toaster />
      <tr>
        <th>{index + 1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-primary" onClick={handleViewDetails}>
              View Details
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyDataTable;
