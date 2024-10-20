import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
  rootElement
);
