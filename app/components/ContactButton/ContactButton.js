import React from "react";

const ContactButton = ({ icon, action, color }) => {
  return (
    <form target="_blank" method="get" action={action}>
      <button className="button" type="submit">
        <i className={icon}></i>
      </button>
      <style jsx>
        {`
          i {
            color: white;
          }
          .button {
            outline: none;
            background-color: transparent;
            border: none;
            margin: 0;
            padding: 5px;
            font-size: 50px;
          }
          i:hover {
            color: ${color};
          }
        `}
      </style>
    </form>
  );
};

export default ContactButton;
