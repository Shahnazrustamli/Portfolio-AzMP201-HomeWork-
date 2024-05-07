import React, { useState } from "react";
import "../../../App.css";
import reducer from "../../../reducers/reducer"
const SortUsers = ({ state, dispatch }) => {
  const handleFilterAdmin = () => {
    dispatch({ type: "FilterAdmin" });
  };


  return (
    <div className="sort">
      <input
        ttype="text"
        // value={searchValue}
        // onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleFilterAdmin}>Admin</button>
    </div>
  );
};

export default SortUsers;
