import React, { useState } from "react";
import "@/styles.css";

export default function ArithmeticPage() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }
    let res = "";
    switch (op) {
      case "+": res = a + b; break;
      case "-": res = a - b; break;
      case "*": res = a * b; break;
      case "/": res = b !== 0 ? a / b : "Error: Divide by 0"; break;
      default: res = "";
    }
    setResult(res);
  };

  return (
    <div className="page">
      <h2 style={{ color: "#818cf8" /* indigo-400 */ }}>
        Arithmetic Operations
      </h2>
      <input
        className="input"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        className="input"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            onClick={() => handleOperation(op)}
            className="button button-indigo"
          >
            {op}
          </button>
        ))}
      </div>

      {result && <p style={{ marginTop: "1rem", fontSize: "1.125rem" }}>Result: {result}</p>}
    </div>
  );
}
