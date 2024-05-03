import React from "react";
import { Outlet } from "react-router-dom";
import Navbarr from "./navbar/Navbar";
import Sort from "./sort/Sort";

const Layout = ({ dispatch }) => {
  return (
    <div>
      <Navbarr />
      <Sort dispatch={dispatch} />
      <Outlet />
    </div>
  );
};

export default Layout;
