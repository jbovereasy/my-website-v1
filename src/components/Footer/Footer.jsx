import React from "react";
import "./Footer.scss";

const Footer = props => {
  return (
    <div id="foot">
      <footer className="container">
        <ul className="ul-container">
          <li>
            <a
              href="https://twitter.com/jbaltazar03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter-square fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/jbaltazar03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://vsco.com/jsb13207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-globe fa-2x" />
            </a>
          </li>
        </ul>
        <span className="reactJS">
          Made with{" "}
          <a
            href="https://github.com/jbaltazar03/my-website-v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-code" />
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;

//          Made with <i class="fas fa-code"></i>
