import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount,decrementByAmount, reset} from "../redux/slices/counterSlice";
const CounterWithInput = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState("")
  return (
    <>
      <div>
        <h1>Counter with input</h1>
        <input type="text" placeholder="Enter number" onChange={(e)=>{
            setInpValue(e.target.value)
        }} />
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={()=>{
            dispatch(incrementByAmount(inpValue))
        }} 
        >
          Increment
        </button>
        <span>{number}</span>
        <button
          aria-label="Decrement value"
          onClick={()=>{
            dispatch(decrementByAmount(inpValue))
        }}         >
          Decrement
        </button>
        <button onClick={()=>{
            dispatch(reset())
        }}>Reset</button>
      </div>
    </>
  );
};

export default CounterWithInput;
