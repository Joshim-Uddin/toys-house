import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

const AddToy = () => {
  useTitle("Add a toy");
  const { user } = useContext(AuthContext);
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const seller = form.seller.value;
    const subCategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photoUrl = form.photoUrl.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;
    const toy = {
      name,
      email,
      seller,
      subCategory,
      price,
      rating,
      availableQuantity,
      photoUrl,
      description,
    };
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId != 0) {
          Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        form.reset();
      });
  };
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Add A Toy</h2>
      <Form onSubmit={handleAddToy} className="w-9/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name of the toy"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="text"
              name="photoUrl"
              placeholder="URL of the toy image"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="text"
              name="seller"
              value={user?.displayName}
              readOnly
              placeholder="Seller Name"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              placeholder="Email Address"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="text"
              name="subcategory"
              placeholder="Sub Category"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              placeholder="$ Price"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-info"
            />
          </div>
          <div>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-info"
            />
          </div>
        </div>
        <div className="my-4">
          <textarea
            name="description"
            id="description"
            placeholder="Detail description"
            cols="30"
            rows="10"
            className="input input-info resize-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-center my-5">
          <input type="submit" value="Add Toy" className="btn custom" />
        </div>
      </Form>
    </div>
  );
};

export default AddToy;
