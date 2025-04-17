import React from 'react';
import {
    createBrowserRouter,
  }from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/errorPages/ErrorPage';
import Home from '../pages/Home/Home';
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index:true,path:"/",Component:Home,
        },
      ]
    },
  ]);