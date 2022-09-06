import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Asset 1.png";
import { OpenSvg, CloseSvg } from "./NavSvg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const classNav = `block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-blue-700 sm:p-0 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent `;

  return (
    <nav className="sticky top-0 sm:px-8 px-5 w-full bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container lg:max-w-5xl justify-between mx-auto sm:items-center sm:flex">
        <div className="flex items-center justify-between py-4">
          <NavLink to="/">
            <img
              className="h-12"
              src={Logo}
              alt="Logo"
            />
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
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 sm:pb-0 sm:mt-0 sm:block ${navbar ? "block " : "hidden"
              }`}
          >
            <ul className="text-center flex flex-col bg-gray-50 rounded-lg border border-gray-100 sm:flex-row sm:space-x-8 sm:mt-0 text-md sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
              <NavLink to="/#" activestyle className={`${classNav}`}>
                Home
              </NavLink>
              <NavLink to="/gpa" activestyle className={`${classNav}`}>
                GPA
              </NavLink>
              <NavLink to="/cgpa" activestyle className={`${classNav}`}>
                CGPA
              </NavLink>
              <NavLink to="/about" activestyle className={`${classNav}`}>
                About
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
