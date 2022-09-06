import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs";
import Cgpa from "./Pages/Cgpa";
import Gpa from "./Pages/Gpa";
import Home from "./Pages/Home";

function App() {
  // const [data, setData] = useState({});

  // function fetchData(event) {
  //   axios
  //     .get("/api/degrees")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   event.preventDefault();
  // }

  return (
    <div className="m-4">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Gpa" element={<Gpa />} />
          <Route exact path="/Cgpa" element={<Cgpa />} />
          <Route exact path="/Aboutus" element={<AboutUs />} />
        </Routes>
      </Router>

      {/* <p>{JSON.stringify(data)}</p>
      <button onClick={fetchData}>Get Data</button> */}
    </div>
  );
}

export default App;
