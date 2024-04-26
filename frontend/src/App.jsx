import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AnimatedCursor from "react-animated-cursor";
import News from "./components/News";
import Footer from "./News/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
