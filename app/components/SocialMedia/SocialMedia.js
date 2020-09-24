import React from "react";

export default function SocialMedia() {
  return (
    <>
      <div className="">
        <button className="btn">
          <i className="fab fa-facebook-square"></i>
        </button>
        <button className="btn">
          <i className="fab fa-instagram-square"></i>
        </button>
        <button className="btn">
          <i className="fab fa-linkedin"></i>
        </button>
        <button className="btn">
          <i className="fab fa-github-square"></i>
        </button>
      </div>
      <style jsx="true">{`
        .btn {
          color: white;
          border: none;
          font-size: 50px;
          background-color: transparent;
        }
      `}</style>
    </>
  );
}
