import React from "react";
import Icon from "../Icon";
const ExeperienceBox = ({ title, text, number }) => {
  return (
    <div className="main_container">
      <div className="number">
        <div className="number-inner">
          <span>
            <Icon className={number} />
          </span>
        </div>
      </div>
      <div className="text_container">
        <div className="title">
          <strong>{title}</strong>
        </div>
        <div className="text">{text}</div>
      </div>
      <style jsx>
        {`
          .main_container {
            display: flex;
            justify-content: center;
            font-family: Averia Serif Libre, Cursive;
            color: white;
            padding: 1.5vh 4vh 3vh 0;
          }
          .number {
            background-color: transparent;
            display: flex;
            transform: translate(50%, 0);
            font-size: 40px;
            border-radius: 50%;
            border: none;
          }
          .number-inner {
            background-color: #2c378e;
            display: flex;
            color: white;
            margin: auto;
            width: 50px;
            height: 50px;
            border: none;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6),
              0 6px 20px 0 rgba(0, 0, 0, 0.59);
            border-radius: 50%;
          }
          .number-inner span {
            margin: auto;
            font-size: 18px;
            font-weight: 900;
            border-radius: 50%;
            background-color: transparent;
          }

          .text_container {
            min-width: 70%;

            border-radius: 5px;
            padding: 15px 40px;
            background-color: #2c378e;
            display: inline-block;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4),
              0 6px 20px 0 rgba(0, 0, 0, 0.2);
          }
          .title {
            font-size: 16px;
          }
          .text {
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};
export default ExeperienceBox;
