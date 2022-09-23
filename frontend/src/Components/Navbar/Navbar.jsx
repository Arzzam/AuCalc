import { useState } from "react";
import { NavLink } from "react-router-dom";
import { OpenSvg, CrossSvg } from "./NavSvg";
import Logo from "../Logo/Logo";
import LogoFont from "../Logo/LogoFont";

// TODO: add blur on navpane.
// todo: theme button.
// todo: add toggle animation.

function NavbarLink(props) {
    return (
        <li className="mx-3">
            <NavLink
                to={props.to}
                onClick={props.onClick}
                className="block py-2 my-0 rounded sm:p-0 sm:hover:text-blue-700 dark:text-gray-400 sm:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:hover:bg-transparent"
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
        <nav className="sticky top-0 z-20 w-full px-5 py-3 bg-white border-gray-200 sm:px-8 dark:bg-gray-900 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto lg:max-w-5xl">
                <NavLink
                    className="sm:mx-3 mx-2 my-2 flex flex-row items-center justify-center"
                    to="/"
                    onClick={collapseNav}
                >
                    <Logo className="h-9 dark:text-white" />
                    <LogoFont className="h-4 ml-2 dark:text-white" />
                </NavLink>
                <button
                    className="p-1 mx-2 border border-solid border-gray-600 text-gray-700 rounded-sm sm:hidden dark:text-gray-400 dark:hover:text-white"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? <CrossSvg /> : <OpenSvg />}
                </button>
                <div
                    className={`sm:flex mt-3 sm:mt-0 sm:basis-auto basis-full item-center ${navbar ? "" : "hidden"
                        }`}
                >
                    <ul className="flex flex-col py-2 text-center border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
                        <NavbarLink to="/" child="Home" onClick={collapseNav} />
                        <NavbarLink to="/gpa" child="GPA" onClick={collapseNav} />
                        <NavbarLink to="/cgpa" child="CGPA" onClick={collapseNav} />
                        {/* <NavbarLink to="/about" child="About" onClick={collapseNav} /> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
