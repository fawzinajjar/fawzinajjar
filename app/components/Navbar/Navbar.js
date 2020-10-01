import React, { useState } from "react";
import Navlink from "components/Navlink";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Navlink text="Home"></Navlink>
        <Navlink text="About me"></Navlink>
        <Navlink text="Services"></Navlink>
        <Navlink text="Portfolio"></Navlink>
        <Navlink text="Contact"></Navlink>
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
