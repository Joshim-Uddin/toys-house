import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const ToyCard = ({ toy, handleDetails, singleToy }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const { photoUrl, price, name, rating } = toy;

  const handleViewDetails = (id) => {
    handleDetails(id);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photoUrl}
          alt="Toy Image"
          className="rounded-xl h-44 w-full"
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
          <label
            htmlFor="my-modal-6"
            onClick={() => handleViewDetails(toy._id)}
            className="btn btn-primary"
          >
            View Details
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">{singleToy?.name}</h3>
          <p className="py-4">{singleToy?.description}</p>
          <div>
            <p>Available Quantity: {singleToy?.availableQuantity}</p>
            <p>Seller : {singleToy?.seller}</p>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
