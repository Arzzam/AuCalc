import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Cgpa from "./Pages/Cgpa";
import Gpa from "./Pages/Gpa";
import Gpa2 from "./Pages/Gpa2";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gpa" element={<Gpa2 />} />
        <Route exact path="/cgpa" element={<Cgpa />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
