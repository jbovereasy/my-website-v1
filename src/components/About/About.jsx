import React from "react";
import resume from "../../assets/JPB-Resume2019.pdf";
import homepic from "../../assets/AboutPic.jpg";
import "./About.scss";

const AboutMe = props => {
  return (
    <div id="aboutPage">
      <div className="container">
        <div className="content">
          <img className="jbaltazar" src={homepic} alt="me" />
          <div className="myLinks">
            <a
              href="https://github.com/jbaltazar03"
              target="_blank"
              alt="Github"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-patrick-baltazar-317a2a70/"
              target="_blank"
              alt="Linkedin"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              href="https://hub.docker.com/u/jsb13207"
              target="_blank"
              alt="Docker"
              rel="noopener noreferrer"
            >
              <i class="fab fa-docker" />
            </a>
            <a
              href="mailto:John.Baltazar03@gmail.com"
              alt="email"
              rel="noopener noreferrer"
            >
              <i class="far fa-envelope" />
            </a>
          </div>
          <div className="bio">
            <h3> About Me </h3>
            <p>
              Hello, I am John P Baltazar. Graduate student from California
              State University, Northridge with a degree in Computer Information
              Technology and minor in Geographic Information Science. I
              currently work as a Cloud Engineer at Warner Bros, and previously
              worked as Web Developer & Operations at Cal State Northridge.
              During my free time, I like to spend my time outdoors which
              includes camping, hitting the driving range, and surfing. Anything
              to disconnect from technology.
            </p>
          </div>
          <a
            className="resume"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hoverResume" popuptext="Resume">
              <i class="fas fa-file-pdf fa-2x" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
