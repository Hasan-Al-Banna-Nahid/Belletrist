import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import WriteScript from "./Components/WriteScript/WriteScript.jsx";
import Example from "./Components/Example/Example.jsx";
import Act from "./Components/ActScript/Act.jsx";
import DashBoard from "./Components/DashBoard/DashBoard.jsx";

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
        path: "/act",
        element: <Act />,
      },
      {
        path: "/writeScript/:id",
        element: <WriteScript />,
        loader: ({ params }) =>
          fetch(
            `https://belletrist-iamnahid591998-gmailcom.vercel.app/${params.id}`
          ),
      },
      {
        path: "/writeScript",
        element: <WriteScript />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
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
