import React from "react";
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
    <footer className="relative p-4 bg-white sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-1">
          Logo {/* Logo */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
            <div>
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
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
      </div>
    </footer>
  );
};

export default Footer;
