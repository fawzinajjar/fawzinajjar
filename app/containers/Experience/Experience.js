import React from "react";
import ExperienceBox from "components/ExperienceBox";

const Experience = () => {
  return (
    <div className="experience-container">
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
      </div>
      <div className="skills-info"></div>
      <style jsx>
        {`
          .experience-container {
            display: flex;
            padding: 0 48px;
            border: 1px solid red;
            background-color: #f9f9f9;
            max-height: 100vh;
          }
          .skills-box {
            display: inline-flex;
            flex-direction: column;
            gap: 20px;
          }
        `}
      </style>
    </div>
  );
};
export default Experience;
