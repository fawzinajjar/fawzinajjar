import React from "react";

export default function SocialMedia() {
  return (
    <>
      <div className="container">
        <span className="spans">facebook</span>
        <span className="spans">
          <i class="fab fa-github"></i>
        </span>
        <span className="spans">LinkedIn</span>
      </div>
      <style jsx="true">
        {`
          .container {
            display: flex;
            flex: 1;
            order: 2;
          }
          .spans {
          }
        `}
      </style>
    </>
  );
}
