import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Layout/Error";
import Home from "../components/Pages/Home/Home";
import AllToys from "../components/Pages/AllToys";
import MyToys from "../components/Pages/MyToys";
import AddToy from "../components/Pages/AddToy";
import Blogs from "../components/Pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/mytoys",
        element: <MyToys />,
      },
      {
        path: "/addtoy",
        element: <AddToy />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
