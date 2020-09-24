import React from "react";
import ReactDom from "react-dom";

const OverlayPageModal = ({ open, children, close }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal_container">
        <button onClick={close}>Close</button>
        {children}
      </div>
      <style jsx>
        {`
          .overlay {
            display: flex;
            position: fixed;
            top: 17.5%;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgb(0, 0, 0, 0.5);
            zindex: 1000;
          }
          .modal_container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #ffff00;
            zindex: 1000;
            padding: 50px;
          }
        `}
      </style>
    </>,
    document.getElementById("overlay")
  );
};

export default OverlayPageModal;
