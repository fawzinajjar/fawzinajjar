import React from "react";

const Button = ({ text, color }) => {
  return (
    <div className="container">
      <button>{text}</button>
      <style jsx>{`
        .container {
          margin: 0.9vw;
        }
        button {
          min-width: 10vw;
          padding: 10px;
          font-size: 14px;
          border: none;
          color: white;
          background-color: ${color};
          font-family: Averia Serif Libre, Cursive;
          outline: none;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3),
            0 6px 20px 0 rgba(0, 0, 0, 0.29);
        }
        button:hover {
          border: 1px solid white;
          padding: 9px;
        }
      `}</style>
    </div>
  );
};
export default Button;
