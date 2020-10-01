import React from "react";
import Navbar from "components/Navbar";
import Paragraph from "../../components/Texts/Paragraph";

const Header = () => {
  return (
    <div className="container">
      <Paragraph font_weight="900" color="white" font_size="40px">
        FawziNajjar
      </Paragraph>
      <Navbar />

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background-color: rgb(46, 57, 145, 0.96);
            position: fixed;
            height: 10vh;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
