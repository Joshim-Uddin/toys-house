import React from "react";
import logo from "./../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <h3>Toys House</h3>
      <div>
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
