import React from "react";

import ServicesBox from "../../components/SerivcesBox";
import Paragraph from "../../components/Texts";

const Services = () => {
  return (
    <>
      <div id="services" className="container">
        <Paragraph font_weight="900" font_size="6vh">
          Services I Provide For You
        </Paragraph>
        <div className="services">
          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="title"
            paragraph="the paragraph of web
          the paragraph of web
          the paragraph of web"
          />

          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="title"
            paragraph="the paragraph of web
          the paragraph of web
          the paragraph of web"
          />
          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="title"
            paragraph="the paragraph of web
          the paragraph of web
          the paragraph of web"
          />
          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="title title"
            paragraph="the paragraph of web
          the paragraph of web
          the paragraph of web"
          />
        </div>

        <style jsx>{`
          .container {
            margin: 6vw 3vw 3vw 3vw;
            background-color: #2e3991;
          }
          .services {
            justify-content: space-around;
            margin: 3vh 3vh 3vh 3vh;
            flex-direction: row;
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;
