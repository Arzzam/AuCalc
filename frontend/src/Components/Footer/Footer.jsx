import React from "react";
import Contributors from "./Contributors";

// TODO Looking
// <a>logo</a>    Nanthakumar            Nafil Arzzam
//                <a>linkdin github</a>  <a>linkdin github</a>
// hr
//                C@ 2022 <a>Aucalc</a>


 


const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-1">
            {/* Logo */}
          </div>
          <div>
            <Contributors />
          </div>
        </div>
    </footer>
  );
};

export default Footer;
