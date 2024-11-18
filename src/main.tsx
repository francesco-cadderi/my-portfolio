import React from "react";
import ReactDOM from "react-dom/client";
import Pagination from "./components/Pagination.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-screen h-screen flex items-center justify-center">
      <Pagination />
    </div>
  </React.StrictMode>
);
