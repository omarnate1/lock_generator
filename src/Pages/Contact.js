import React from "react";
import "./Contact.css";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feedback, or need assistance with our
          Password Generating App, please don't hesitate to get in touch with
          us. We're here to help you!
        </p>
        <h2>
          Email: omarnate10@gmail.com,jonathanelegbede@gmail.com,
          okuntes@gmail.com, richjuve@gmail.com
        </h2>
        <h2>
          Phone: +2348095793233, +14013476956 , +2347064231765, +2348032000713
        </h2>
        <p>
          Our dedicated support team is available to assist you with any
          inquiries or issues you may have. Feel free to reach out to us via
          email or phone, and we'll do our best to provide you with the
          assistance you need. <br></br>
          <br></br>
          <strong>
            <em>
              Thank you for choosing our app, and we look forward to hearing
              from you!
            </em>
          </strong>
        </p>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
