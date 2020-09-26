import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import OverlayPageModal from "components/OverlayPage/OverlayPageModal";

export default function VisitorsSignature() {
  const [isOpen, setIsOpen] = useState(false);
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
        <strong>VisitorsSignature </strong>
      </span>

      <span className="overlay1">
        <span className="btn" onClick={() => setIsOpen(true)}>
          <i className="fas fa-plus-circle"></i>
        </span>
        <OverlayPageModal open={isOpen} close={() => setIsOpen(false)}>
          <p>fawzi najjar</p>
          <input></input>
        </OverlayPageModal>
      </span>
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

            font-size: 100px;
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
            font-size: 70px;
            background-color: transparent;
          }
          .container {
            width: 45vw;
          }
          .overlay1 {
            zindex: 1;
            postion: relative;
          }
        `}
      </style>
    </div>
  );
}
