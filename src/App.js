import React from "react";
import "./App.css";
import Footer from "./Footer";
import Passwordgenerator from "./Passwordgenerator";
import Navbar from "./Navigation/Navbar"; // Import the Navbar component correctly

const App = () => {
  return (
    <div>
      <Navbar />
      <Passwordgenerator />
      <Footer />
    </div>
  );
};

export default App;
