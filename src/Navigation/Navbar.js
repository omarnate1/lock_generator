import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // You can create a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/About">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
