import React from "react";
import Welcome from "../../components/Welcome";
import Logo from "../../components/Logo";
import ExeperienceBox from "../../components/ExperienceBox";
import MyImage from "../../components/Logo/1.png";

const Landing = () => {
  return (
    <>
      <div id="home" className="container">
        <div className="greeting-container">
          <Welcome
            greeting="Hey There"
            text="I'm Fawzi A Full Stack Developer"
          />
        </div>
        <div className="my-image-container">
          <img width="" src={MyImage} />
        </div>
      </div>

      <style jsx>{`
        .container {
          flex-wrap: wrap;
          padding: 0 3vw;
          display: flex;
          justify-content: space-around;
        }
        .greeting-container {
          padding: 0 3vw;
          align-self: center;
          flex: 1 1 350px;
        }
        .my-image-container {
          flex: 1 1 350px;
          height: 89vh;
        }
        img {
          border: 2px solid red;
        }
      `}</style>
    </>
  );
};

export default Landing;
