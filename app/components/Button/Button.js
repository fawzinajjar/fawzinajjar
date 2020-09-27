import React from "react";

const Button = ({ text, color }) => {
  return (
    <div className="container">
      <button>{text}</button>
      <style jsx>{`
        .container {
          margin: 10px;
        }
        button {
          width: 150px;
          padding: 12px;
          font-size: 14px;
          border: none;
          color: white;
          background-color: ${color};
          font-family: Averia Serif Libre, Cursive;
          outline: none;
          box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.1);
        }
        button:hover {
          border: 1px solid white;
          padding: 11px;
        }
      `}</style>
    </div>
  );
};
export default Button;
