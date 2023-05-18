import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ToyCard = ({ toy }) => {
  const { photoUrl, price, name, rating } = toy;
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
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
