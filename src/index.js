import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/spang-front">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
