
import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApp from '../Pages/AllApp/AllApp';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=> fetch("/appsData.json"),
        path:'/',
        Component:Home

      },

      {
        path:'/allApps',
        loader: ()=> fetch("/appsData.json"),
        Component:AllApp
      },

      {
          path: '/appDetails/:id',
          loader: ()=> fetch("/appsData.json"),
          Component:AppDetails
      },

       {
        path: '/installation',
        Component:Installation
       }

    ]
  },
]);