import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // You can create a separate CSS file for styling
import lock_logo from "../lock_logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={lock_logo} alt="Logo" /> {/* Use the imported logo image */}
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/About">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
