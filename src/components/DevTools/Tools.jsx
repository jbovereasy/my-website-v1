import React from "react";
import Vagrant from "../../assets/Vagrant.png";
import Terraform from "../../assets/Terraform.png";
import Ansible from "../../assets/Ansible.png";
import "./Tools.scss";

const Tools = props => {
  return (
    <div id="skills">
      <h1>
        {"<"}Dev Stack {"/>"}
      </h1>
      <div className="container dev-cont">
        <div className="frontEnd grid">
          <h3>FrontEnd</h3>
          <i className="devicon-html5-plain-wordmark colored" />
          <i className="devicon-css3-plain-wordmark colored" />
          <i className="devicon-bootstrap-plain colored" />
          <i className="devicon-javascript-plain colored" />
          <i className="devicon-react-original-wordmark colored" />
        </div>
        <div className="backEnd grid">
          <h3>BackEnd</h3>
          <i className="devicon-nodejs-plain-wordmark colored" />
          <i className="devicon-mongodb-plain colored" />
          <i className="devicon-php-plain colored" />
          <i className="devicon-postgresql-plain colored" />
          <i className="devicon-laravel-plain colored" />
        </div>
        <div className="devTools grid">
          <h3>DevTools</h3>
          <i className="devicon-python-plain colored" />
          <i className="devicon-amazonwebservices-plain-wordmark colored" />
          <i className="devicon-docker-plain colored" />
          <i className="devicon-github-plain" />
          <i className="devicon-wordpress-plain colored" />
        </div>
        <div className="others grid">
          <h3>Others</h3>

          <i className="devicon-hashicorp-plain">
            <img src={Vagrant} alt="vagrant" />
            <img src={Terraform} alt="terraform" />
            <img src={Ansible} alt="ansible" />
          </i>
          <i className="devicon-illustrator-plain colored" />
          <i className="devicon-photoshop-plain colored" />
          <p>ChatOps, ArcGIS and QGis</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
