import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Global from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
