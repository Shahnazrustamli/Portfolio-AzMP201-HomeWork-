import React, { useState } from "react";
import "../App.css"
const Calculator = () => {
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [cavab, setCavab] = useState("");
  const caculate = (operator) => {
    let cavab;
    const n1 = parseFloat(num);
    const n2 = parseFloat(num1);
    switch (operator) {
      case "+":
        cavab = n1 + n2;
        break;
      case "-":
        cavab = n1 - n2;
        break;
      case "*":
        cavab = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          alert("Sıfıra bölmə yoxdur");
          cavab = "!";
        } else {
          cavab = n1 / n2;
        }
        break;
      default:
        cavab = "";
    }
    setCavab(cavab.toString());
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-inputs">
        <input
          type="number"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setNum1(e.target.value);
          }}
        />
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            caculate("+");
          }}
        >
          Topla
        </button>
        <button
          onClick={() => {
            caculate("-");
          }}
        >
          Çıx
        </button>
        <button
          onClick={() => {
            caculate("*");
          }}
        >
          Vurma
        </button>
        <button
          onClick={() => {
            caculate("/");
          }}
        >
          Bölmə
        </button>
      </div>
      <div className="cavab">Cavab: {cavab}</div>
    </div>
  );
};

export default Calculator;
