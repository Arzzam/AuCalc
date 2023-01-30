import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Gpa from "./Pages/Gpa";
// import Cgpa from "./Pages/Cgpa";
// import Cgpa2 from "./Pages/Cgpa2";
// import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gpa" element={<Gpa />} />
                {/* <Route exact path="/cgpa" element={<Cgpa2 />} /> */}
                <Route exact path="/about" element={<About />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
