import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import f3 from "../../images/f3.jpg";
import f4 from "../../images/f4.jpg";
import f5 from "../../images/f5.jpg";
import f6 from "../../images/f6.jpg";

const ImageSlide = () => {
  const images = [f1, f2, f3, f4, f5, f6];

  const zoomInProperties = {
    duration: 4000,
    transitionDuration: 3000,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    scale: 1,
  };

  return (
    <>
      <div>
        <div className="slide-container">
          <Zoom {...zoomInProperties}>
            <div className="each-fade">
              <div>
                <img height="150px" width="300px" src={f1} />
              </div>
            </div>
            <div className="each-fade">
              <div>
                <img height="150px" width="300px" src={f2} />
              </div>
            </div>
            <div className="each-fade">
              <div>
                <img height="150px" width="300px" src={f3} />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <style jsx="true">
        {`
          img {
            border-radius: 15px;
          }
        `}
      </style>
    </>
  );
};

export default ImageSlide;
