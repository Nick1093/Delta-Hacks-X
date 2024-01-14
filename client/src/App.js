import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Reels from "./Reels";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </>
  );
};

export default App;
