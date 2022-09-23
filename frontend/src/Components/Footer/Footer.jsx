import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import LogoFont from "../Logo/LogoFont";
import Contributors from "./Contributors";

// TODO Looking
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
        <footer className="relative bottom-0 w-full px-5 py-3 sm:p-6 ">
            <Container>
                <div className="flex flex-row justify-around">
                    <div className="flex flex-col items-center justify-center">
                        <Logo className="h-14" />
                        <LogoFont className="h-4" />
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
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="text-center">
                    {cr} {year}.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
