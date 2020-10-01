import React from "react";

import Icon from "../../components/Icon";
import Paragraph from "../../components/Texts/Paragraph";

const Footer = () => {
  return (
    <div className="container">
      <div className="follow">
        <Paragraph font_weight="700" font_size="30px">
          Follow Me
        </Paragraph>
      </div>

      <div className="icons">
        <Icon fontSize="30px" className="fab fa-facebook-f" />
        <Icon fontSize="30px" className="fab fa-github" />
        <Icon fontSize="30px" className="fab fa-linkedin-in" />
        <Icon fontSize="30px" className="fab fa-instagram" />
      </div>
      <div className="end">
        CopyRight © 2020 FawziNajjar™ All Rights Reserved®
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-self: center;
            border-top: 4px solid red;
          }
          .icons {
            align-self: center;
            margin: 10px;
            padding: 10px;
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
