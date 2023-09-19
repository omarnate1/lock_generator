import React from "react";
//import "./About.css"; // Import the CSS file for styling
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer";

const About = () => {
  return (
   <div><Navbar></Navbar>
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        malesuada, dui ut fringilla volutpat, libero dui tristique erat, ac
        sollicitudin dolor purus eget justo.
      </p>
      <p>
        Fusce auctor eros vel sapien pharetra, quis ullamcorper massa tempor.
        Integer nec facilisis nisl, vel euismod lectus.
      </p>
    </div> <Footer></Footer>
    </div>
  );
};

export default About;
