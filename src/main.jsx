import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import "animate.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ErrorPageLayout from "./layout/ErrorPage/ErrorPageLayout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/project-details/:id`,
        element: <ProjectDetails />,
        loader: () => fetch("my_projects.json"),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPageLayout />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
