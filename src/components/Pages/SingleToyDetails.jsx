import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";

// picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
const SingleToyDetails = () => {
  const toy = useLoaderData();
  const {
    photoUrl,
    name,
    seller,
    email,
    price,
    rating,
    availableQuantity,
    description,
  } = toy;
  return (
    <div className="lg:w-2/3 flex flex-col gap-5 mx-auto lg:text-xl bg-white shadow-md shadow-slate-300 p-5 my-8 rounded-md">
      <img src={photoUrl} alt="" className="w-full h-96" />
      <h3 className="lg:text-4xl text-3xl font-semibold text-center my-8">
        {name}
      </h3>
      <div className="flex justify-between text-semibold">
        <p>Seller : {seller}</p>
        <p>Email : {email}</p>
      </div>
      <div className="flex justify-between font-semibold">
        <p>Price : $ {price}</p>
        <div className="flex gap-4">
          <Rating value={rating} style={{ width: 120 }} readOnly /> {rating}
        </div>
      </div>
      <p className="text-semibold">Available Quantity : {availableQuantity}</p>
      <p className="text-semibold">Details : {description}</p>
    </div>
  );
};

export default SingleToyDetails;
