import React, { Children } from "react";

const Paragraph = ({ font_size, color, font_weight, children }) => {
  return (
    <div className="container">
      {children}
      <style jsx>
        {`
          .container {
            font-size: ${font_size || "16px"};
            color: ${color || "white"};
            font-family: Averia Serif Libre, Cursive;
            font-weight: ${font_weight || "400"};
          }
          @media (max-width: 600px) {
            .container {
              font-size: ${font_size / 2};
            }
          }
        `}
      </style>
    </div>
  );
};

export default Paragraph;
