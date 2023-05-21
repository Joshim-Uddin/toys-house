import React from "react";

const ReviewCard = ({ comment }) => {
  return (
    <div className="card card-side bg-white text-black shadow-xl">
      <figure></figure>
      <div className="card-body relative">
        <p>{comment.message}</p>
        <h2 className="card-title absolute right-5 bottom-5">
          -{comment.name}
        </h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
