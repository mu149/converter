import React, { useState } from "react";
import ConversionService from "../services/ConversionService";
import "@/styles.css";

const bases = ["decimal", "binary", "octal", "hex", "bcd"];

export default function ConversionPage() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("decimal");
  const [toBase, setToBase] = useState("binary");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    try {
      const output = ConversionService.convert(input, fromBase, toBase);
      setResult(output);
    } catch (e) {
      setResult("Error: " + e.message);
    }
  };

  return (
    <div className="page">
      <h2 style={{ color: "#22d3ee" /* cyan-400 */ }}>Number Conversion</h2>
      <input
        className="input"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="buttons" style={{ width: "100%", maxWidth: "28rem" }}>
        <select
          className="select"
          value={fromBase}
          onChange={(e) => setFromBase(e.target.value)}
        >
          {bases.map((b) => (
            <option key={b} value={b}>{b.toUpperCase()}</option>
          ))}
        </select>
        <select
          className="select"
          value={toBase}
          onChange={(e) => setToBase(e.target.value)}
        >
          {bases.map((b) => (
            <option key={b} value={b}>{b.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert} className="button button-cyan" style={{ width: "100%", maxWidth: "28rem" }}>
        Convert
      </button>

      {result && (
        <p style={{ marginTop: "1rem", fontSize: "1.125rem" }}>
          Result: <span style={{ fontFamily: "monospace" }}>{result}</span>
        </p>
      )}
    </div>
  );
}
