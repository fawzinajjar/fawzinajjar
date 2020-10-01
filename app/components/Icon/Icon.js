import React from "react";

const Icon = ({ className, fontSize, color }) => {
  return (
    <span>
      <i className={className}></i>
      <style jsx>
        {`
          span {
            font-size: ${fontSize || "28px"};
            color: ${color || "white"};
            margin: 10px 10px 10px 10px;
          }
        `}
      </style>
    </span>
  );
};
export default Icon;
