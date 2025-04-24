import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "←") {
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch {
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "←"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{expression || "0"}</div>
        <div className="buttons">
          {buttons.map((btn, idx) => (
            <button key={idx} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;


