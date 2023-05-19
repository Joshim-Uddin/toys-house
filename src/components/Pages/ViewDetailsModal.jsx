import React from "react";

const ViewDetailsModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Name</h3>
          <p className="py-4">seller</p>
          <div>
            <p>Available Quantity: </p>
            <p>Seller :</p>
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

export default ViewDetailsModal;
