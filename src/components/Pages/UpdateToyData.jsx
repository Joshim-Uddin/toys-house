import React, { useContext, useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";

const UpdateToyData = () => {
  const toy = useLoaderData();
  const { price, availableQuantity, description } = toy;
  const { user } = useContext(AuthContext);

  const handleUpdateToy = (e) => {
    const form = e.target;
    const id = toy._id;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;
    const updateToy = { price, description, availableQuantity, id };
    fetch(`http://localhost:5000/update`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Toy Data Updated Successfully");
          form.reset();
        }
      });
  };
  return (
    <div className="my-12">
      <h3 className="text-3xl font-semibold my-8 text-center">Update a toy</h3>
      <Form onSubmit={handleUpdateToy} className="w-9/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="$ Price"
              className="input input-info"
            />
          </div>
          <div>
            <label htmlFor="quantity">Available Quantity</label>
            <input
              type="text"
              defaultValue={availableQuantity}
              name="quantity"
              placeholder="Available Quantity"
              className="input input-info"
            />
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="description">Details Description</label>
          <textarea
            name="description"
            defaultValue={description}
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
      <Toaster />
    </div>
  );
};

export default UpdateToyData;
