import React from "react";
import Paragraph from "../../components/Texts";

import ContactButton from "../../components/ContactButton";
const Contact = () => {
  return (
    <div id="contact" className="container ">
      <div className="title">
        <hr />
        <Paragraph font_size="4vh" font_weight="900">
          Contact Me
        </Paragraph>
      </div>
      <div>
        <div className="buttons">
          <ContactButton
            color="#25D366"
            icon={"fab fa-whatsapp"}
            action="https://wa.me/380951996310"
          ></ContactButton>
          <ContactButton
            icon={"fab fa-facebook-messenger"}
            color="#00B2FF"
            action="https://m.me/xes3x"
          ></ContactButton>
          <ContactButton
            icon={"fas fa-phone-alt"}
            color="#D4AF37"
            action="tel:00380951996310"
          ></ContactButton>
          <ContactButton
            icon={"fas fa-envelope"}
            color="#D44638"
            action="mailto:fawzinajjar@hotmail.com"
          ></ContactButton>
          <div></div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0vw 3vw 3vw 3vw;
        }
        .inputs {
          text-align: center;
          width: 100%;
        }
        .title {
          margin: 3vw 3vw 3vw 3vw;
          text-align: center;
        }
        .buttons {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
export default Contact;
