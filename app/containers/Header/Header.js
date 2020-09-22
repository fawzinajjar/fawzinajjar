import React from "react";
import Name from "components/Name/Name";
import SocialMedia from "components/SocialMedia/SocialMedia";
import ImageSlide from "components/ImageSlideShow/ImageSlide";

export default function Header() {
  return (
    <div className="container">
      <div className="Name">
        <Name />
      </div>
      <div className="ImageSlide">
        <ImageSlide />
      </div>
      <div className="SocialMedia">
        <SocialMedia />
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            background-color: black;
            padding: 20px;
          }
          .ImageSlide {
            width: 300px;
            height: 150px;
          }
        `}
      </style>
    </div>
  );
}
