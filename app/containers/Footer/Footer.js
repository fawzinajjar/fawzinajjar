import React from "react";

import Icon from "../../components/Icon";
import Paragraph from "../../components/Texts/Paragraph";
import ContactButton from "../../components/ContactButton";

const Footer = () => {
  return (
    <div className="container">
      <div className="follow">
        <Paragraph font_weight="700" font_size="4vh">
          Follow Me
        </Paragraph>
      </div>

      <div className="icons">
        <ContactButton
          color="#3b5998"
          icon={"fab fa-facebook-f"}
          action="https://facebook.com/xes3x"
        ></ContactButton>
        <ContactButton
          color="#e4405f"
          icon={"fab fa-instagram"}
          action="https://insagram.com/fawzinajjar"
        ></ContactButton>
        <ContactButton
          color="#FFFC00"
          icon={"fab fa-github"}
          action="https://github.com/fawzinajjar"
        ></ContactButton>
        <ContactButton
          color="#0077B5"
          icon={"fab fa-linkedin-in"}
          action="https://linkedin.com/in/fawzinajjar"
        ></ContactButton>
      </div>
      <div className="end">
        CopyRight © 2020 fawzinajjar.com™ All RightsReserved®
      </div>
      <style jsx>
        {`
          .container {
            box-shadow: 0 4px 8px 0 rgba(60, 60, 60, 0.9),
              0 6px 20px 0 rgba(60, 60, 60, 0.6);
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-self: center;
          }
          .icons {
            align-self: center;
            display: flex;
          }
          .follow {
            align-self: center;
            margin: 10px;
            padding: 10px;
          }
          .end {
            text-align: center;
            color: white;
            font-size: 1vw;
          }
          @media (max-width: 600px) {
            .end {
              font-size: 4vw;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Footer;
