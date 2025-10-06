import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import ConversionPage from "./pages/ConversionPage";
import ArithmeticPage from "./pages/ArithmeticPage";
import InstallBanner from "./components/InstallBanner";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conversion" element={<ConversionPage />} />
          <Route path="/arithmetic" element={<ArithmeticPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <InstallBanner />
      </div>
    </Router>
  );
}
