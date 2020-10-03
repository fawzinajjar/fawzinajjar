import React, { useState } from "react";
import Navlink from "components/Navlink";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Navlink navigate={"#landing"} text="Home"></Navlink>
        <Navlink navigate={"#experience"} text="About me"></Navlink>
        <Navlink navigate={"#services"} text="Services"></Navlink>
        <Navlink navigate={"#portfolio"} text="Portfolio"></Navlink>
        <Navlink navigate={"#contact"} text="Contact"></Navlink>
      </div>
      <style jsx>
        {`
          .navbar {
            display: flex;
          }
          @media (max-width: 600px) {
            .navbar {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
