import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div className="container">
      <input placeholder={placeholder} />
      <style jsx>{`
        .container {
          margin: 2vw;
        }
        input {
          font-weight: 700;
          font-family: Averia Serif Libre, Cursive;
          background-color: #3140a1;
          border: none;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6),
            0 6px 20px 0 rgba(0, 0, 0, 0.59);
          outline: none;
          padding: 10px;
          width: 50%;
        }
        input::placeholder {
          color: white;
          text-align: center;
        }
        @media (max-width: 600px) {
          input {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};
export default Input;
