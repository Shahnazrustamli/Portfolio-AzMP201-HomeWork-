import React, { Children } from "react";
import Home from "../page/Home";
import Search from "../page/Search";
import Login from "../page/Login";
import Register from "../page/Register";
import Profile from "../page/Profile";
import UserRoot from "../layout/UserRoot";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
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
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

export default routes;
