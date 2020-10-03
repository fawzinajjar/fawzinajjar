import React from "react";
import Welcome from "../../components/Welcome";
import FawziSVG from "../../images/FawziSVG";

const Landing = () => {
  return (
    <div id="landing" className="container">
      <Welcome greeting="Hey There" text="I'm Fawzi A Full Stack Developer" />
      <FawziSVG />
      <style jsx>{`
        .container {
          flex-wrap: wrap;
          padding: 0 50px 0 50px;
          display: flex;
          height: 90vh;
        }
        @media (max-width: 600px) {
          .container {
            padding: 0 0 0 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
