import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { InstantsApp } from "./InstantsApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <InstantsApp />
      </BrowserRouter>
   </React.StrictMode>
);
