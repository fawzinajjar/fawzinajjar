import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom } from "react-slideshow-image";

export default function Name({ fontsize, fontcolor, fontFamily }) {
  const name_styles = {
    fontSize: fontsize,
    color: fontcolor,
    fontFamily: fontFamily,
  };

  return <div style={name_styles}>Fawzi Najjar</div>;
}
