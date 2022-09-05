import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Asset 1.png";
import { OpenSvg, CloseSvg } from "./NavSvg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const classNav = `block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent `;

  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container justify-between mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
        <div>
          <div className="flex items-center justify-between py-3 sm:py-5 sm:block">
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
                className="p-2 text-gray-700 rounded-sm outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <CloseSvg /> : <OpenSvg />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 sm:pb-0 sm:mt-0 sm:block ${
              navbar ? "block " : "hidden"
            }`}
          >
            <ul className="text-center flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
              <NavLink to="/#" activestyle className={`${classNav}`}>
                Home
              </NavLink>
              <NavLink to="/Gpa" activestyle className={`${classNav}`}>
                GPA
              </NavLink>
              <NavLink to="/Cgpa" activestyle className={`${classNav}`}>
                CGPA
              </NavLink>
              <NavLink to="/Aboutus" activestyle className={`${classNav}`}>
                About Us
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
