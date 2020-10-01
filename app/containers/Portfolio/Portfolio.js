import React from "react";

import PortfolioProject from "../../components/PortfolioProjects";
import Paragraph from "../../components/Texts";

const Portfolio = () => {
  return (
    <div className="main-container">
      <Paragraph font_weight="900" font_size="6vh">
        Let's See My Portfolio
      </Paragraph>
      <div className="container">
        <div className="d">
          <label>
            <PortfolioProject />
            ---- Description ----
          </label>
        </div>
        <div className="d">
          <label>
            <PortfolioProject />
            ---- Description ----
          </label>
        </div>
        <div className="d">
          <label>
            <PortfolioProject />
            ---- Description ----
          </label>
        </div>
        <div className="d">
          <label>
            <PortfolioProject />
            ---- Description ----
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
