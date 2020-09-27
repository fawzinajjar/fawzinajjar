import React from "react";
import Welcome from "../../components/Welcome";
import Logo from "../../components/Logo";

const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <Welcome greeting="Hey There" text="I'm Fawzi A Full Stack Developer" />

        <div className="illustration">
          <Logo width="auto-fit" height="auto-fit" />
        </div>
      </div>

      <style jsx>{`
        .home {
          display: flex;
          justify-content: space-between;
          border: 1px solid black;
        }
        .illustration {
          border: 1px solid red;
        }
      `}</style>
    </>
  );
};

export default Home;
