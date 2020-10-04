import React from "react";
import Navbar from "components/Navbar";
import Paragraph from "../../components/Texts/Paragraph";

const Header = () => {
  return (
    <div className="container">
      <form method="get" action="#landing">
        <button type="submit">
          <Paragraph font_weight="900" color="white" font_size="40px">
            FAWZI NAJJAR
          </Paragraph>
        </button>
      </form>

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
          button {
            background-color: transparent;
            border: none;
            outline: none;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
