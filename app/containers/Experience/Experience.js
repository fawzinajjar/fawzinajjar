import React from "react";
import ExperienceBox from "components/ExperienceBox";
import Paragraph from "../../components/Texts/Paragraph";

import Button from "../../components/Button";
import Icon from "../../components/Icon";

const Experience = () => {
  return (
    <div className="container">
      <div className="skills-box">
        <ExperienceBox
          title="Branding"
          text="A brand is name brand designsymbol other features that distinguishes an organization"
          number="01"
        />
        <ExperienceBox
          title="Phone"
          text="A brand is name brand designsymbol other features that distinguishes an organization"
          number="02"
        />

        <ExperienceBox
          title="Cloth"
          text="A brand is name brand designsymbol other features that distinguishes an organization"
          number="03"
        />

        <ExperienceBox
          title="Cloth"
          text="A brand is name brand designsymbol other features that distinguishes an organization"
          number="03"
        />
      </div>
      <div className="skills-info">
        <Icon className="fas fa-briefcase" fontSize="40px" />
        <Paragraph font_size="40px" font_weight="900">
          Experienced
        </Paragraph>
        <Paragraph font_weight="600" font_size="14px">
          Experience is Knowladge and or mystery Experience is Knowladge and or
          mysteryExperience is Knowladge and or mysteryExperience is Knowladge
        </Paragraph>
        <Button text="CONTACT NOW" color="#F16D3F" />
      </div>
      <style jsx>
        {`
          .container {
            font-family: Averia Serif Libre, Cursive;
            background-color: #2e3991;
            display: flex;
            flex-wrap: wrap;
          }
          .skills-box {
            margin: 3vw 3vw 3vw 3vw;
            align-self: center;
            flex: 1 1 300px;
            display: inline-flex;
            flex-direction: column;
          }
          .skills-info {
            flex: 1 1 300px;
            padding: 3vw 3vw 3vw 3vw;
            margin: 3vw 3vw 3vw 3vw;
            align-self: center;
            color: white;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};
export default Experience;
