import React from "react";

export default function Name() {
  return (
    <>
      <div className="name">FAWZI NAJJAR</div>
      <style jsx="true">
        {`
          div.name {
            flex: 2;
            order: 1;
            flex-basix: 40%;
            font-size: 70px;
            color: white;
            font-family: "Sriracha", cursive;
          }
        `}
      </style>
    </>
  );
}
