import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App"; // Import the 'App' component
import Navbar from "./Navigation/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About", // Corrected the path to start with a forward slash
    element: <About />,
  },

  {
    path: "/Contact", // Corrected the path to start with a forward slash
    element: <Contact />,
  },
]);

 const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
