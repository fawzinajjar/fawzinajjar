import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Paragraph from "../../components/Texts";
const DoSomething = () => {
  return (
    <div className="container">
      <div className="title">
        <hr />

        <Paragraph font_size="6vh" font_weight="900">
          Lets Do Something Big
        </Paragraph>
      </div>
      <div className="inputs">
        <Input placeholder={"Enter your name"} />
        <Input placeholder={"Enter your email"} />
        <Button text="I'm Ready" color="#F16545" />
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
          text-align: center;
          margin: 3vw 3vw 3vw 3vw;
        }
      `}</style>
    </div>
  );
};
export default DoSomething;
