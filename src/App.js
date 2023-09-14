import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Passwordgenerator from "./Passwordgenerator";

const App = () => {
  return (
    <div>
      <Header />

      <Passwordgenerator />

      <Footer />
    </div>
  );
};

export default App;
