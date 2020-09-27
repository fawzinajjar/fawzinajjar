import React from "react";
import Logo from "components/Logo";
import Navbar from "components/Navbar";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <Logo />
        <Navbar />
      </header>
      <style jsx>
        {`
          .main-header {
            display: flex;
            justify-content: space-between;
            padding: 8px 74px;
          }
        `}
      </style>
    </>
  );
};

export default Header;
