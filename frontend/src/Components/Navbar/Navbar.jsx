import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Asset 1.png";
import { OpenSvg, CrossSvg } from "./NavSvg";

// TODO: add blur on navpane.
// todo: theme button.
// todo: add toggle animation.

function NavbarLink(props) {
  return (
    <li className="mx-3">
      <NavLink
        to={props.to}
        onClick={props.onClick}
        className="py-2 sm:p-0 my-0 block rounded sm:hover:text-blue-700 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:hover:bg-transparent"
      >
        {props.child}
      </NavLink>
    </li>
  );
}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  function collapseNav(event) {
    setNavbar(false);
  }

  return (
    <nav className="sticky top-0 sm:px-8 px-5 py-3 w-full bg-white dark:bg-gray-900">
      <div className="container flex-wrap justify-between mx-auto items-center flex">
        <NavLink to="/" onClick={collapseNav}>
          <img className="h-12" src={Logo} alt="Logo" />
        </NavLink>
        <button
          className="sm:hidden m-2 text-gray-700 rounded-sm dark:text-gray-400 dark:hover:text-white"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <CrossSvg /> : <OpenSvg />}
        </button>
        <div
          className={`sm:flex mt-3 sm:mt-0 sm:basis-auto basis-full item-center ${
            navbar ? "" : "hidden"
          }`}
        >
          <ul className="text-center py-2 flex flex-col bg-gray-50 rounded-lg border border-gray-100 sm:flex-row sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
            <NavbarLink to="/" child="Home" onClick={collapseNav} />
            <NavbarLink to="/gpa" child="GPA" onClick={collapseNav} />
            <NavbarLink to="/cgpa" child="CGPA" onClick={collapseNav} />
            <NavbarLink to="/about" child="About" onClick={collapseNav} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
