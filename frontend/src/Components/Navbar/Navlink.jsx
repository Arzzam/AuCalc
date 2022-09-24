import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
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

export default NavbarLink;