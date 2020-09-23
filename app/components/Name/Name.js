import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom } from "react-slideshow-image";

export default function Name() {
  const words = [
    "Hello, there!",
    "Привет!",
    "Ciao!",
    "Բարև, այնտեղ",
    "Selam!",
    "こんにちは！",
  ];
  const names = ["Фаузи Нажжап", "فوزي نجار"];
  const zoomInProperties = {
    duration: 4000,
    transitionDuration: 1000,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    scale: 1,
  };

  return (
    <div className="">
      {" "}
      <Fade {...zoomInProperties}>
        {words.map((word, index) => (
          <div className="word">{word}</div>
        ))}
      </Fade>
      <div className="name ss">Fawzi Najjar</div>
      <Zoom {...zoomInProperties}>
        {names.map((name, index) => (
          <div className="name_translate">{name}</div>
        ))}
      </Zoom>
      <style jsx="true">{`
        .word {
          font-size: 3vw;
        }
        .name {
          font-size: 6vw;
        }
        .name_translate {
          font-size: 1.5vw;
        }
        .ss {
        }
      `}</style>
    </div>
  );
}
