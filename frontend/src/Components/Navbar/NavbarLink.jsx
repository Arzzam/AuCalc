import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
    return (
        <li className="mx-3">
            <NavLink
                to={props.to}
                onClick={props.onClick}
                className="block py-2 my-0 rounded sm:p-0 text-gray-400 sm:hover:text-white hover:bg-gray-700 hover:text-white sm:hover:bg-transparent"
            >
                {props.child}
            </NavLink>
        </li>
    );
}

export default NavbarLink;