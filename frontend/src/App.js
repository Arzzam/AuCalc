import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Gpa2 from "./Pages/Gpa2";
import Cgpa from "./Pages/Cgpa";
import Footer from "./Components/Footer/Footer";
// import About from "./Pages/About";
// import Gpa from "./Pages/Gpa";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gpa" element={<Gpa2 />} />
                <Route exact path="/cgpa" element={<Cgpa />} />
                {/* <Route exact path="/about" element={<About />} /> */}
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
