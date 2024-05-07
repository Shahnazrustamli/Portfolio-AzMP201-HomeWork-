import React, { useState } from "react";
import "../../../App.css";
const Sort = ({ state, dispatch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSortByNameAtoZ = () => {
    dispatch({ type: "SortByNameAtoZ" });
  };

  const handleSortByNameZtoA = () => {
    dispatch({ type: "SortByNameZtoA" });
  };

  const handleSortByPrice = () => {
    dispatch({ type: "SortByPrice" });
  };

  const handleSortByRate = () => {
    dispatch({ type: "SortByRate" });
  };
  const handleSortByCount = () => {
    dispatch({ type: "SortByCount" });
  };

  return (
    <div className="sort">
      <input
        ttype="text"
        // value={searchValue}
        // onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSortByNameAtoZ}>Name A-Z</button>
      <button onClick={handleSortByNameZtoA}>Name Z-A</button>
      <button onClick={handleSortByPrice}>Price low-high</button>
      <button onClick={handleSortByRate}>Rate low-high</button>
      <button onClick={handleSortByCount}>Count low-high</button>
    </div>
  );
};

export default Sort;
