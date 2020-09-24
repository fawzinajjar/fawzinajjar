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
  const images = [f1, f2];

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
      <Zoom {...zoomInProperties}>
        {images.map((image) => (
          <img className="image" src={image} />
        ))}
      </Zoom>

      <style jsx="true">{`
        .image {
          max-width: 100%;
          max-height: 100%;
          border-radius: 50%;
          border: 3px solid rgb(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default ImageSlide;
