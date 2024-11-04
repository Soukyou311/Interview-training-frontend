import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddQA from "./pages/AddQA";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddQA" element={<AddQA />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
