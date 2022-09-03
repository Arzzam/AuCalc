import React from "react";
// import Logo from "../../assets/Aucalc Logo.png";
import Logo from "../../assets/Asset 1.png";
// import Styled from "styled-components";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarCom";

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink to="/" activestyle>
          <img src={Logo} style={{ height: "70px" }} alt="Logo" />
          {/* <p>AuCalc Logo</p> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activestyle>
            Home
          </NavLink>
          <NavLink to="/" activestyle>
            GPA
          </NavLink>
          <NavLink to="/" activestyle>
            CGPA
          </NavLink>
          <NavLink to="/" activestyle>
            About Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
