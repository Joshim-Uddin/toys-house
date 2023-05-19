import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyToyDataTable = ({ toys, toy, index }) => {
  const [id, setId] = useState({});
  const { price, availableQuantity, subCategory, name, description, _id } = toy;
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
          <button className="btn btn-error">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default MyToyDataTable;
