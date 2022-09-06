import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Cgpa from "./Pages/Cgpa";
import Gpa from "./Pages/Gpa";
import Home from "./Pages/Home";

function App() {

    return (
        <div className="m-4">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/gpa" element={<Gpa />} />
                    <Route exact path="/cgpa" element={<Cgpa />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
