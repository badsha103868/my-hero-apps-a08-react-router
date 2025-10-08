
import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApp from '../Pages/AllApp/AllApp';
import Installation from '../Pages/Installation/Installation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path:'/',
        Component:Home

      },

      {
        path:'/apps',
        Component:AllApp
      },
       {
        path: '/installation',
        Component:Installation
       }

    ]
  },
]);