import React, { useState } from "react";
import logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  return (
    <>
      <nav className="max-[600px]:hidden flex items-center justify-between h-20 px-6 bg-[#7A1F2B] text-white">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" className="h-12 m-0" />
            <h3 className="text-2xl font-semibold m-0">Toys House</h3>
          </Link>
        </div>
        <div className="flex gap-4 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/alltoys">All Toys</NavLink>
          <NavLink to="/mytoys">My Toys</NavLink>
          <NavLink to="/addtoy">Add a Toy</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <p>User Profile</p>
        </div>
      </nav>
      <div className="min-[600px]:hidden bg-[#7A1F2B] text-white">
        <div className="flex justify-between items-center p-4">
          <FaBars onClick={() => setClicked(!clicked)} />
          <Link to="/">
            <h4 className="text-xl font-semibold">Toys House</h4>
          </Link>
        </div>
        <div
          className={
            clicked
              ? `flex flex-col gap-2 ps-4 relative top-0 left-0 pb-3`
              : `flex flex-col gap-2 ps-4 absolute -top-64`
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/alltoys">All Toys</NavLink>
          <NavLink to="/mytoys">My Toys</NavLink>
          <NavLink to="/addtoy">Add a Toy</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <p>User Profile</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
