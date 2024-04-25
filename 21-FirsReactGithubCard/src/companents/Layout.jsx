import React from "react";
import Devfinder from "./Devfinder";
import DevBottom from "./DevBottom";
import Main from "./Main";
import "../App.css"
const Layout = () => {
  return (
    <div className="container">
      <Devfinder />
      <DevBottom />
      <Main />
    </div>
  );
};

export default Layout;
