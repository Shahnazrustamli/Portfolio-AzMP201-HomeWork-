import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  let [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="count">
        <p>{count}</p>
      </div>
      <div>
        {" "}
        <div className="counter">
          <button
            onClick={() => {
              setCount(count + inputValue);
            }}
          >
            DEC
          </button>
          <button
            onClick={() => {
              setCount(count - inputValue);
            }}
          >
            INC
          </button>
        </div>
      </div>
      <div className="defoltCount">
        <input
          onChange={(e) => {
            setInputValue(parseInt(e.target.value));
          }}
          type="number"
          placeholder="Rəqəm daxil edin..."
        />
      </div>
    </div>
  );
};

export default Counter;