import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Layout/Error";
import Home from "../components/Pages/Home/Home";
import AllToys from "../components/Pages/AllToys";
import MyToys from "../components/Pages/MyToys";
import AddToy from "../components/Pages/AddToy";
import Blogs from "../components/Pages/Blogs";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import SingleToyDetails from "../components/Pages/SingleToyDetails";
import UpdateToyData from "../components/Pages/UpdateToyData";
import AboutUsPage from "../components/Pages/AboutUs";

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
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoutes>
            <AddToy />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateToyData />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/toy/${params.id}`
          ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoutes>
            <SingleToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-joshim-uddin.vercel.app/toy/${params.id}`
          ),
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
