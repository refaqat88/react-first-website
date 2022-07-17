import React from "react";
import webimage from "../src/img/aboutus.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page of"
        subtitle="Raffay Software Solution"
        visit="/contact"
        btnName="Contact Now"
        imgsrc={webimage}
      />
    </>
  );
};

export default About;
