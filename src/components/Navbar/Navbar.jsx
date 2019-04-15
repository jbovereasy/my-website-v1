import React from "react";
import resume from "../../assets/JPB-Resume2019.pdf";
import "./Navbar.scss";

const Navbar = props => {
  return (
    <nav className="page-header">
      <a className="page-scroll" href="about">
        About
      </a>
      <a className="page-scroll" href="experience">
        Experience
      </a>
      <a className="page-scroll" href="projects">
        Projects
      </a>
      <a href={resume} target="_blank" rel="noopner noreferrer">
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
