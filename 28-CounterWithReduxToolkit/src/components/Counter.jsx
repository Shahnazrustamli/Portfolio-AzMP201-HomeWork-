import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter</h1>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
  )
}

export default Counter