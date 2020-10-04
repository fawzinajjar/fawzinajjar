import React from "react";

import PortfolioProject from "../../components/PortfolioProjects";
import Paragraph from "../../components/Texts";

import f1 from "../../images/skillconnect1.png";
import f2 from "../../images/skillconnect2.png";
import f3 from "../../images/tasker1.png";
import f4 from "../../images/tasker2.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="main-container">
      <Paragraph font_weight="900" font_size="6vh">
        Let's See My Portfolio
      </Paragraph>
      <div className="container">
        <div className="d">
          <label>
            <PortfolioProject url={f1} />
            ---- SkillConnect Login ----
          </label>
        </div>
        <div className="d">
          <label>
            <PortfolioProject url={f2} />
            ---- SkillConnect Register ----
          </label>
        </div>
        <div className="d">
          <label>
            <PortfolioProject url={f3} />
            ---- Tasker Login ----
          </label>
        </div>
        <div className="d">
          <label>
            <PortfolioProject url={f4} />
            ---- Tasker Register ----
          </label>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #2e3991;
          flex-wrap: wrap;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .d {
          font-size: 18px;
          color: white;
          font-family: Averia Serif Libre, Cursive;
          text-align: center;
        }
        .main-container {
          margin: 6vw 3vw 3vw 3vw;
        }
      `}</style>
    </div>
  );
};
export default Portfolio;
