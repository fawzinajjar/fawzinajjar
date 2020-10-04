import React from "react";
<<<<<<< HEAD

const PortfolioProject = ({ url }) => {
  return (
    <div className="container">
      <img src={url} />
=======
import f1 from "./11.png";
const PortfolioProject = () => {
  return (
    <div className="container">
      <img src={f1} />
>>>>>>> master
      <style jsx>{`
        .container {
          margin: 5vh 5vh 5vh 5vh;
        }
        img {
          border-radius: 15px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6),
            0 6px 20px 0 rgba(0, 0, 0, 0.29);
          max-width: 500px;
          max-height: 500px;
        }
        @media (max-width: 600px) {
          img {
            max-width: 50vh;
          }
        }
      `}</style>
    </div>
  );
};
export default PortfolioProject;
