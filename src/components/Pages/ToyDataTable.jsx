import React from "react";

const ToyDataTable = ({ toy, index }) => {
  const { seller, price, availableQuantity, subCategory, name } = toy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>
        <button className="btn btn-primary">View Details</button>
      </td>
    </tr>
  );
};

export default ToyDataTable;
