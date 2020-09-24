import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide, Fade } from "react-slideshow-image";

export default function VisitorsSignature() {
  const signatures = [
    "I liked your website theme",
    "Miss you",
    "Hello bro",
    "Good Bye ...!",
  ];
  const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    scale: 1,
  };
  return (
    <div className="container">
      <span className="title">
        <strong>Visitors Signature </strong>
      </span>
      <button className="btn">
        <i className="fas fa-plus-circle"> </i>
      </button>

      <Fade {...slideProperties}>
        {signatures.map((signature, index) => (
          <p className="signature" key={index}>
            {signature}
          </p>
        ))}
      </Fade>

      <style jsx="true">
        {`
          .title {
            color: white;
            margin-left: 10px;
            padding-left: 10px;
            font-family: "Sacramento", cursive;
            border-left: 1px solid #ffff00;
            font-size: 20px;
            border-radius: 5%;
          }
          .signature {
            font-size: 1.9vw;
            padding-left: 3.6vw;
            color: white;

            font-family: "Sacramento", cursive;

            line-height: 1;
          }
          .btn {
            color: white;
            border: none;
            border: 0px solid white;
            color: #ffff00;
            font-size: 20px;
            background-color: transparent;
          }
          .container {
            width: 45vw;
          }
        `}
      </style>
    </div>
  );
}
