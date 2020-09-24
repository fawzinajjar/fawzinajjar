import React from "react";
import Name from "components/Name/Name";
import SocialMedia from "components/SocialMedia/SocialMedia";
import ImageSlide from "components/ImageSlideShow/ImageSlide";

export default function Header() {
  return (
    <div className="main_container">
      {/* <div className="sub_containers image_slide">
        <ImageSlide />
      </div> */}
      <div className="sub_containers name">
        <Name />
      </div>
      <div className="sub_containers social_media">
        <SocialMedia />
      </div>

      <style jsx>{`
        .main_container {
          display: flex;
          background-color: rgb(90, 90, 90, 0.1);
          flex-wrap: wrap;
        }
        .sub_containers {
          object-fit: contain;
          min-width: 100px;
        }
        .image_slide {
          flex: 1 1 250px;
        }
        .name {
          flex: 1 1 250px;
          border-bottom: 1px solid rgb(75, 75, 75, 1);
        }
        .social_media {
          flex: 1 1 250px;
          border-bottom: 1px solid rgb(75, 75, 75, 1);
        }
      `}</style>
    </div>
  );
}
