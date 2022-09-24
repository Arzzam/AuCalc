import React from 'react'
import { NavLink } from "react-router-dom";


const NavOpen = (props) => {
    return (
        <div className="fixed top-4 right-4 w-full max-w-screen-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900">
            <ul className="space-y-5">
                <li><NavbarLink to="/" child="Home" onClick={collapseNav} /></li>
                <li>GPA</li>
                <li>CGPA</li>
            </ul>
        </div>
    )
}

export default NavOpen;