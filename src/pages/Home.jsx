import React from "react";
import { Link } from "react-router-dom";
import "@/styles.css";

export default function Home() {
  return (
    <div className="page" style={{ justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#22d3ee" }}>
        Smart Converter
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "20rem" }}>
        <Link to="/conversion" className="link link-cyan">
          Number System Conversion
        </Link>
        <Link to="/arithmetic" className="link link-indigo">
          Arithmetic Operations
        </Link>
      </div>
    </div>
  );
}
