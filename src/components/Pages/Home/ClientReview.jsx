import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";

const ClientReview = () => {
  //AOS component
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  //Aos end
  const [comments, setComments] = useState();
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/comments"
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  const handleReview = (e) => {
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.comment.value;
    const review = { name, email, message };
    fetch(
      "https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/addcomment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            title: "Review Successful",
            heightAuto: false,
          });
        }
        form.reset();
      });
  };
  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold text-center mb-8">Reviews</h2>
      <div
        className="grid lg:grid-cols-3 items-center justify-center gap-5 bg-stone-500 text-white p-4"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-3xl font-semibold mt-4">Our Client Review</h3>
          <p>
            We appreciate your kind and honest feedback and invite you to our
            amazing store.
          </p>
          <button className="btn custom">About Us</button>
        </div>
        <div className="grid col-span-2 lg:grid-cols-2 gap-3">
          {comments?.slice(0, 2).map((comment) => (
            <ReviewCard key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
      <div className="divider"></div>
      <div className="bg-stone-500 p-4" data-aos="fade-left">
        <div className="lg:w-1/2 mx-auto">
          <h4 className="text-2xl font-bold text-center text-white my-8">
            Leave A Review
          </h4>
          <Form
            onSubmit={handleReview}
            className="flex flex-col gap-4 items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-info focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-info focus:outline-none"
            />
            <textarea
              name="comment"
              id="comment"
              placeholder="Review Here..."
              className="input input-info focus:outline-none resize-none h-24 p-2"
            ></textarea>
            <input type="submit" value="Submit" className="btn custom" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
