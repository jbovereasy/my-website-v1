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
      <div className="container">
        <div className="frontEnd">
          <h3>FrontEnd</h3>
          <i className="devicon-html5-plain-wordmark colored" />
          <i className="devicon-css3-plain-wordmark colored" />
          <i class="devicon-bootstrap-plain colored" />
          <i class="devicon-javascript-plain colored" />
          <i className="devicon-react-original-wordmark colored" />
        </div>
        <div className="backEnd">
          <h3>BackEnd</h3>
          <i class="devicon-nodejs-plain-wordmark colored" />
          <i class="devicon-mongodb-plain colored" />
          <i class="devicon-php-plain colored" />
          <i class="devicon-postgresql-plain colored" />
          <i class="devicon-mysql-plain colored" />
          <i class="devicon-laravel-plain colored" />
        </div>
        <div className="devTools">
          <h3>DevTools</h3>
          {/* <img className="toolSize" src={Vagrant} alt="vagrant" />
          <img className="toolSize" src={Terraform} alt="terraform" />
          <img className="toolSize1" src={Ansible} alt="ansible" /> */}
          <i class="devicon-amazonwebservices-plain-wordmark colored" />
          <i class="devicon-docker-plain colored" />
          <i class="devicon-linux-plain" />
          <i class="devicon-visualstudio-plain colored" />
          <i class="devicon-slack-plain colored" />
          <i class="devicon-git-plain colored" />
          <i class="devicon-apache-plain colored" />
          <i class="devicon-nginx-original colored" />
          <i class="devicon-vim-plain colored" />
        </div>
        <div className="others">
          <h3>Others</h3>
          <i class="devicon-python-plain colored" />
          <i class="devicon-illustrator-plain colored" />
          <i class="devicon-photoshop-plain colored" />
          <i class="devicon-wordpress-plain colored" />
          <p>ArcGIS, QGis, Cisco Meraki, Postman </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
