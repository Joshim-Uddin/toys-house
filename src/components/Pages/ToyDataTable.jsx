import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const ToyDataTable = ({ toy, index }) => {
  const { user } = useContext(AuthContext);
  const { seller, price, availableQuantity, subCategory, name, _id } = toy;
  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "You are not logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      return <Navigate to="/login"></Navigate>;
    }
  };
  return (
    <>
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
