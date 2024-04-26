import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../todo.css"

const Header = ({ todos, setToDos }) => {
  let [imputValue, setImputValue] = useState("");
  return (
    <div className="form">
      <input
        value={imputValue}
        onChange={(e) => {
          setImputValue(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let obj = {
            id: uuidv4(),
            todo: imputValue,
          };
          setToDos([...todos, obj]);
          setImputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
