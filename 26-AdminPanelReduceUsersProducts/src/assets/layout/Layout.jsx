import React from "react";
import { Outlet } from "react-router-dom";
import Navbarr from "./navbar/Navbar";

const Layout = ({ dispatch }) => {
  return (
    <div>
      <Navbarr />
      <Outlet />
    </div>
  );
};

export default Layout;
