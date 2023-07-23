import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import WriteScript from "./Components/WriteScript/WriteScript.jsx";
import Example from "./Components/Example/Example.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/writeScript",
        element: <WriteScript />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
