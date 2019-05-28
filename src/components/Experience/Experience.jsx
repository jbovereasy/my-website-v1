import React from "react";
import "./Experience.scss";
import csunlogo from "../../assets/csunlogo.png";
import wbtech from "../../assets/wbtech.png";
import csunppm from "../../assets/csunppm.png";
import mlm from "../../assets/mlm.png";

const Experience = props => {
  return (
    <div id="experience" className="container">
      <div className="box-logo">
        <div className="exp-container">
          <h1 id="ed-font">Education</h1>
          <div className="outer-exp">
            <div className="col-left-exp">
              <img
                className="rounded-circle exp-logo"
                src={csunlogo}
                alt="csun"
              />
            </div>
            <div className="university">
              <h3>California State University Northridge</h3>
              <p>B.S. in Computer Information Technology</p>
              <p>Minor in Geographic Information Science</p>
              <p>
                <strong>Clubs and Activities:</strong> Layer 8 Computer Security
                Club, Geography Club, Filipino-American Student Association,
                Meta+Lab
              </p>
            </div>
          </div>

          <div className="workExp">
            <h1>Work Experience</h1>
            <div className="outer-exp">
              <div className="right-exp">
                <img
                  className="rounded-circle exp-logo"
                  src={wbtech}
                  alt="wbtech"
                />
              </div>
              <div className="left-exp">
                <h3>Warner Bros.</h3>
                <p>Cloud Engineer </p>
                <p>[April 2019 - Present]</p>
              </div>
            </div>

            <div className="outer-exp">
              <div className="right-exp">
                <img
                  className="rounded-circle exp-logo"
                  src={csunppm}
                  alt="csunppm"
                />
              </div>
              <div className="left-exp">
                <h3>CSUN PPM</h3>
                <p>Web Developer & IT Operations </p>
                <p>[May 2018 - April 2019]</p>
              </div>
            </div>

            <div className="outer-exp">
              <div className="right-exp">
                <img
                  className="rounded-circle exp-logo"
                  src={csunlogo}
                  alt="csun"
                />
              </div>
              <div className="left-exp">
                <h3>CSUN Central IT</h3>
                <p>Desktop Architect & Desktop Support</p>
                <p>[April 2018 - August 2018]</p>
              </div>
            </div>

            <div className="outer-exp">
              <div className="right-exp">
                <img className="rounded-circle exp-logo" src={mlm} alt="mlm" />
              </div>
              <div className="left-exp">
                <h3>Moulton Logistics Management</h3>
                <p>Desktop Support & Network Technician</p>
                <p> [November 2016 - May 2018]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
