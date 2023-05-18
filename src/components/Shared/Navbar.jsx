import React from "react";
import logo from "./../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-6 bg-[#7A1F2B] text-white">
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
  );
};

export default Navbar;
