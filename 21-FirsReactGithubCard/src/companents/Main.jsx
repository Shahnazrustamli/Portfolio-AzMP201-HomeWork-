import React from "react";
import Maintop from "./Maintop";
import MainMed from "./MainMed";
import MainBottom from "./MainBottom";
import "../App.css";

const Main = () => {
  return (
    <div className="main">
      <Maintop />
      <MainMed />
      <MainBottom />
    </div>
  );
};

export default Main;
