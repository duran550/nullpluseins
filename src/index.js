// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// // import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import { AppProvider } from "./useContext/useContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppProvider>
//         <App />
//     </AppProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./useContext/useContext"; 
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
          <App /> 
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
