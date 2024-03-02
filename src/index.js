import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShopContextProvider } from "./Context/CreateContext";
import "./Styles/styles.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
  </ShopContextProvider>
);
