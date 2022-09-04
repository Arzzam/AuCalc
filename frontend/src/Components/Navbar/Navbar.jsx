import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Asset 1.png";

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
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 ${
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
