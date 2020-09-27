import React from "react";
import Button from "../Button";

const Welcome = ({ greeting, text }) => {
  return (
    <div className="container">
      <div className="greeting">{greeting}</div>
      <div className="text">{text}</div>
      <div className="buttons_container">
        <Button color="red" text="HIRE ME NOW" />
        <Button color="darkblue" text="DOWNLOAD CV" />
      </div>

      <style jsx>
        {`
          .buttons_container {
            display: flex;
          }
          .container {
            display: flex;
            margin: auto;
            flex-direction: column;
            padding: 5px;
            border: 1px solid yellow;
            font-family: Averia Serif Libre, Cursive;
            justify-content: center;
          }
          .greeting {
            font-size: 3vw;
            color: lightgrey;
          }
          .text {
            font-size: 4vw;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
