import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyDataTable = ({ toy, index, deleteOpt }) => {
  const { price, availableQuantity, subCategory, name, _id } = toy;

  const handleDelete = () => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/toy/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    deleteOpt(_id);
  };
  return (
    <>
      <tr className="text-center">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
        </td>
        <td>
          <button
            className="btn btn-error"
            onClick={() =>
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  handleDelete();
                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                }
              })
            }
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyDataTable;
