import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default Header;
