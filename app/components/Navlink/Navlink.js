import React, { useState } from "react";

const Navlink = ({ navigate, text }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="button-container">
      <form method="get" action={navigate}>
        <button
          type="submit"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {text}
        </button>
      </form>
      {hovering ? <span></span> : null}
      <style jsx>
        {`
          .button-container {
            display: flex;
            flex-direction: column;
          }
          span {
            margin: 0 auto;
            border: 1px solid white;
            margin-top: -5px;
            width: 20px;
          }
          button {
            color: white;
            background-color: transparent;
            border: 0;
            outline: 0;
            font-size: 20px;
            padding-bottom: 1px;
            font-family: Averia Serif Libre, Cursive;
            font-weight: 800;
            margin: 10px 20px;
            cursor: pointer;
          }
          button:hover {
            padding-bottom: 0px;
            box-shadow: -10px 0 -10px black;
          }
        `}
      </style>
    </div>
  );
};

export default Navlink;
