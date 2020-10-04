import React from "react";
import ExperienceBox from "components/ExperienceBox";
import Paragraph from "../../components/Texts/Paragraph";

import Icon from "../../components/Icon";

const Experience = () => {
  return (
    <div id="experience" className="container ">
      <div className="skills-box">
        <div className="about">
          <Paragraph color="White" font_weight="900" font_size="40px">
            About Me
          </Paragraph>
        </div>

        <ExperienceBox
          title="Languages"
          text="English  /  Arabic  / Russian"
          number="fas fa-language"
        />
        <ExperienceBox
          title="Address"
          text="Ukraine, Kahrkiv / Lebanon, Beqaa"
          number="fas fa-map-marker-alt"
        />
        <ExperienceBox
          title="Email Address"
          text="Fawzinajjar@hotmail.com"
          number="fas fa-at"
        />
      </div>
      <div className="skills-info">
        <Icon className="fas fa-briefcase" fontSize="70px" />
        <Paragraph font_size="30px" font_weight="900">
          Languages & Skills
        </Paragraph>
        <Paragraph color="#A0A0A0" font_size="15px" font_weight="600">
          Javascript ES6+
        </Paragraph>
        <Paragraph font_weight="600" font_size="25px">
          Front End
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          Html / CSS
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          ReactJs / Hooks / Redux / Redux-Thunk / Redux-Form
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          Bootstrap / SASS / React-Bootstrap / JSX
        </Paragraph>
        <Paragraph font_size="25px" font_weight="900">
          Back End
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          NodeJs / Express / REST APIs
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          MongoDB / NOSQL / Mongoose
        </Paragraph>
        <Paragraph font_size="25px" font_weight="900">
          Other Skills
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          Linux / Bash / zch
        </Paragraph>
        <Paragraph color="#A0A0A0" font_weight="600" font_size="15px">
          Git / Github
        </Paragraph>
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
          .about {
            align-self: center;
          }
        `}
      </style>
    </div>
  );
};
export default Experience;
