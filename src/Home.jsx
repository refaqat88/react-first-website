import React from "react";
import webimage from "../src/img/home.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        subtitle="Raffay Software Solution"
        visit="/service"
        btnName="Get Started"
        imgsrc={webimage}
      />
    </>
  );
};

export default Home;
