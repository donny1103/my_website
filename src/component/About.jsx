import React from "react";
import profile from "./profile.png";

const About = () => (
  <div id="about" className="row">
    <div className="photo col-6 d-flex align-items-center justify-content-center">
      <img src={profile} alt="Weidong Li" className="img-fluid" />
    </div>
    <div className="details col-6 d-flex flex-column justify-content-center">
      <h1>Weidong Li</h1>
      <h5>Web Developer</h5>
      <p>
        I am a web developer who passionate in engineering and crafting
        responsive, interactive web app. I have 3-years experience in full stack
        application development with expertise in front end application
        development using modern JavaScript frameworks and libraries. My skills
        of web responsive design, database management and troubleshooting make
        me a reliable web developer/designer who efficiently delivers products
        with satisfaction.
      </p>
    </div>
  </div>
);

export default About;
