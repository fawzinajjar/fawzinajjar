import React from "react";
import Name from "../../components/Name";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

export default function Header() {
  return (
    <div className="container">
      <Name />
      <SocialMedia />
      <style jsx>
        {`
          .container {
            display: flex;
            background-color: red;
          }
        `}
      </style>
    </div>
  );
}
