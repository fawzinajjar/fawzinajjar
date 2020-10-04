import React from "react";

import ServicesBox from "../../components/SerivcesBox";
import Paragraph from "../../components/Texts";

const Services = () => {
  return (
    <>
      <div id="services" className="container">
        <Paragraph font_weight="900" font_size="6vh">
          Projects I Worked On
        </Paragraph>
        <div className="services">
          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="SkillConnect"
            paragraph="Mini Social Media Web Where i made Registeration System, User Profile and Dashboard. BackEnd : I Used nodeJs Express MongoDB  - FrontEnd : I used React Redux and Bootstrap  "
          />

          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="Tasker"
            paragraph="Small project made to allow User Register and add tasks.BackEnd : I Used nodeJs Express MongoDB  - FrontEnd : I used React Redux and Css and Jsx Styling"
          />
          <ServicesBox
            fontAwsome="fas fa-briefcase"
            title="Personal Web"
            paragraph="Personal website for my self More updates to come. Mainly developed by reactjs and css/JSX in component Styling and deployed at aws servers  "
          />
        </div>

        <style jsx>{`
          .container {
            margin: 6vw 3vw 3vw 3vw;
            background-color: #2e3991;
          }
          .services {
            justify-content: space-around;
            margin: 3vh 3vh 3vh 3vh;
            flex-direction: row;
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;
