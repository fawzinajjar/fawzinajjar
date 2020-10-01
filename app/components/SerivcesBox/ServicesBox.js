import React from "react";
import Icon from "../Icon";
import Paragraph from "../Texts/Paragraph";

const ServicesBox = ({ fontAwsome, title, paragraph }) => {
  return (
    <div className="container">
      <Icon className={fontAwsome} />
      <Paragraph text={title} />
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <style jsx>{`
        .container {
          margin: 10px;
          flex: 1 1 250px;
          padding: 1.5vh 2.5vh 1.5vh 2.5vh;
          color: white;
          text-align: center;
          border-radius: 10px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6),
            0 6px 20px 0 rgba(0, 0, 0, 0.29);
        }
      `}</style>
    </div>
  );
};

export default ServicesBox;
