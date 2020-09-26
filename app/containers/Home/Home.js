import React from "react";
import InfoCard from "../../components/InfoCards/Info";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="sub_container">
          <InfoCard />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            flex-direction: column;
            flex: 1;
            order: 2;
            display: flex;
            border: 1px solid blue;
            width: 100%;
          }
          .sub_container {
            display: flex;
            justify-content: center;
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Home;
