// This component is in Development

import React from 'react'
import NavbarLink from './Navlink';

// TODO 
// hover effect in list 


const NavOpen = (props) => {
    return (
        <div className={`fixed top-4 right-4 w-full max-w-screen-xs bg-gray-900 rounded-lg shadow-lg p-6 ${props.navExpand ? "" : " hidden"}`}>
            <ul className="space-y-5">
                <li>
                    <NavbarLink to="/" child="Home" onClick={props.collapseNav} />
                </li>
                <li>
                    <NavbarLink to="/gpa" child="GPA" onClick={props.collapseNav} />
                </li>
                <li>
                    <NavbarLink to="/cgpa" child="CGPA" onClick={props.collapseNav} />
                </li>
                {/* <li><NavbarLink to="/about" child="About" onClick={props.collapseNav} /></li> */}
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-50 text-white">
                <p>NanthaKumar | Nafil Arzzam</p>
            </div>
        </div>
    )
}

export default NavOpen;