import React from "react";

const Icon = ({ url, className, fontSize, color }) => {
  console.log(url);
  return (
    <span>
      <i href={url} className={className}></i>
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
