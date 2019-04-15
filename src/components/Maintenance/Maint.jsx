import React, { Component } from "react";
import "./Maint.scss";
import resume from "../../assets/JPB-Resume2019.pdf";

export default class maint extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>johnbaltazar.com</h1>
          <hr />
          <div class="loading" />
          <p>
            Bought this domain for future use and added a simple file as
            placeholder.
          </p>
          <p>
            I will update it eventually. Meanwhile, check out my other network.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/jbaltazar03"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/john-patrick-baltazar-317a2a70/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={resume} target="_blank" rel="noopner noreferrer">
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://vsco.co/jsb13207"
                target="_blank"
                rel="noopener noreferrer"
              >
                VSCO
              </a>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}
