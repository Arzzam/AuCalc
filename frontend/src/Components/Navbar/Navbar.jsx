import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import LogoFont from "../Logo/LogoFont";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
import NavbarLink from "./Navlink";
// import NavOpen from "./NavOpen";

// TODO: add blur on navpane.   68px
// todo: theme button.
// todo: add toggle animation.


const Navbar = () => {
    const [navExpand, setNavExpand] = useState(false);

    function collapseNav(event) {
        setNavExpand(false);
    }

    return (
        <div
            className="relative h-px"
        >
            <nav className="sticky top-0 z-20 py-1 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <Container
                    className="flex flex-wrap items-center justify-between lg:max-w-4xl"
                >

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
                        onClick={() => setNavExpand(!navExpand)}
                    >
                        {
                            navExpand ?
                                <XMarkIcon
                                    className="h-7"
                                />
                                :
                                <Bars3BottomRightIcon
                                    className="h-7"
                                />
                        }
                    </button>
                    {/* <NavOpen onClick={collapseNav} navExpand={navExpand} /> */}
                    <div
                        className={`sm:flex sm:m-0 m-2 sm:basis-auto basis-full item-center${navExpand ? "" : " hidden"}`}
                    >
                        <ul className="flex flex-col py-2 text-center border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
                            <NavbarLink to="/" child="Home" onClick={collapseNav} />
                            <NavbarLink to="/gpa" child="GPA" onClick={collapseNav} />
                            {/* <NavbarLink to="/cgpa" child="CGPA" onClick={collapseNav} /> */}
                            <NavbarLink to="/about" child="About" onClick={collapseNav} />
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
