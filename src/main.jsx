import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CardDetails from "./pages/CardDetails";

/* import AboutList from "./pages/AboutList"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /*   {
    path: "/about",
    element: <AboutList />,
  }, */
  {
    path: "/details/:id",
    element: <CardDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
