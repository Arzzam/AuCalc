import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import LogoFont from "../Logo/LogoFont";
import Contributors from "./Contributors";

// TODO Looking  161px
// <a>logo</a>    Nanthakumar            Nafil Arzzam
//                <a>linkdin github</a>  <a>linkdin github</a>
// hr
//                C@ 2022 <a>Aucalc</a>

const cr = "Copyright ⓒ ";
const year = new Date().getFullYear();

const linkdNafil = "https://www.linkedin.com/in/arzzam19/";
const gitNafil = "https://github.com/Arzzam";

const gitNantha = "https://github.com/nknantha";
const linkdNantha = "https://www.linkedin.com/in/nanthakumar13/";

const Footer = () => {
    return (
        <footer className="bottom-0 w-full px-8 sm:py-3 absolute pb-2">
            <div className="flex flex-row justify-around items-center">
                <div className="flex flex-col xs:flex-row items-center justify-center">
                    <Logo className="xs:h-14 h-9" />
                    <LogoFont className="h-3 sx:h-4" />
                </div>
                <Contributors
                    name="Nanthakumar"
                    ldLink={linkdNantha}
                    gitLink={gitNantha}
                />
                <Contributors
                    name="Nafil Arzzam"
                    ldLink={linkdNafil}
                    gitLink={gitNafil}
                />
            </div>
            <hr className="my-2 border-gray-200 sm:mx-auto" />
            <div className="text-center">
                {cr} {year}.
            </div>
        </footer>
    );
};

export default Footer;
