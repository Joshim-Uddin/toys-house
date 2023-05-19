import React, { useContext, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {
  const { user, loading } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { photoUrl, price, name, rating, _id } = toy;

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You are not logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      return <Navigate to="/login"></Navigate>;
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photoUrl}
          alt="Toy Image"
          className="rounded-xl h-52 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title my-4">{name}</h2>
        <div className="flex justify-between items-center gap-16 mb-4">
          <p>Price : $ {price}</p>
          <div className="flex items-center gap-3">
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />{" "}
            <span>{rating}</span>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-primary" onClick={handleViewDetails}>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
