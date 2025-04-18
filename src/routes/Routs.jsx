import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/errorPages/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("bookData.json"),
      },
      {
        path:'/readlist',
        loader: () => fetch("bookData.json"),
        Component:ReadList,
      },
      {
        path:"/bookDetails/:userId",
        loader: () => fetch("bookData.json"),
        Component:BookDetails,
      }
    ],
  },
]);
