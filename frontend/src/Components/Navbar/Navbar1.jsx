import React, { useState } from "react";
import Logo from "../../assets/Asset 1.png";
import { NavLink } from "react-router-dom";
// import Styled from "styled-components";
// import { Nav, NavLink, Bars, NavMenu } from "./NavbarCom";

const Navbar1 = (props) => {
  const [navbar, setNavbar] = useState(true);

  return (
    <>
      <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/#" activestyle className="flex items-center">
            <img
              className="mr-3 h-6 sm:h-9"
              src={Logo}
              style={{ background: "black", height: "70px" }}
              alt="Logo"
            />
            {/* <p>AuCalc Logo</p> */}
          </NavLink>
          <div className="sm:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <div>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </button>
          </div>
          <div
            className={`hidden w-full sm:block sm:w-auto ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
              <NavLink
                to="/#"
                activestyle
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded sm:bg-transparent sm:text-blue-700 sm:p-0 dark:text-white "
              >
                Home
              </NavLink>
              <NavLink
                to="/Gpa"
                activestyle
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
              >
                GPA
              </NavLink>
              <NavLink
                to="/Cgpa"
                activestyle
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
              >
                CGPA
              </NavLink>
              <NavLink
                to="/Aboutus"
                activestyle
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent"
              >
                About Us
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
