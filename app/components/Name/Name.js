import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom } from "react-slideshow-image";

export default function Name() {
  const words = ["Hello, there!", "Привет!", "Ciao!", "Selam!", "こんにちは！"];
  const names = ["Фаузи Нажжап", "فوزي نجار", "Full Stack Developer"];
  const zoomInProperties = {
    duration: 4000,
    transitionDuration: 1000,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    scale: 1,
  };

  return (
    <>
      <Fade {...zoomInProperties}>
        {words.map((word, index) => (
          <div key={index} className="word">
            {word}
          </div>
        ))}
      </Fade>
      <div className="name ss">Fawzi Najjar</div>
      <Zoom {...zoomInProperties}>
        {names.map((name, index) => (
          <div key={index} className="name_translate">
            {name}
          </div>
        ))}
      </Zoom>
      <style jsx="true">{`
        .word {
          font-size: 1.9vw;
          padding-left: 3.6vw;
          color: rgb(90, 90, 90);
          font-family: "Averia Serif Libre", cursive;
          line-height: 1;
        }
        .name {
          font-size: 6vw;
          color: white;
          font-family: "Averia Serif Libre", cursive;
          line-height: 0.4;
        }
        .name_translate {
          font-size: 1.5vw;
          font-family: "Averia Serif Libre", cursive;
          color: rgb(90, 90, 90);
          line-height: 2.2;
          padding-left: 6vw;
        }
        .ss {
        }
      `}</style>
    </>
  );
}
