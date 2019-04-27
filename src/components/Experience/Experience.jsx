import React from "react";
import "./Experience.scss";

const Experience = props => {
  return (
    <div id="experience" className="container">
      <div className="exp-container">
        <div className="education">
          <h1>Education</h1>
          <div className="university right">
            <p>California State University Northridge</p>
            <p>B.S. in Computer Information Technology</p>
            <p>Minor in Geographic Information Science</p>
            <p>
              Clubs: Layer 8 Computer Security Club, Geography Club,
              Filipino-American Student Association
            </p>
          </div>
        </div>
        <div className="workExp">
          <h1>Work Experience</h1>
          <div className="workInfo">
            <p>Warner Bros.</p>
            <p>Cloud Engineer [April 2019 - Present]</p>
            <p>sadfjsdkljf</p>
          </div>
          <div className="workInfo">
            <p>CSUN PPM</p>
            <p>Web Developer & IT Operations [May 2018 - April 2019]</p>
            <p>sadfjsdkljf</p>
          </div>
          <div className="workInfo">
            <p>CSUN Central IT</p>
            <p>
              Desktop Architect & Desktop Support [April 2018 - August 2018]
            </p>
            <p>derppp</p>
          </div>
          <div className="workInfo">
            <p>Moulton Logistics Management</p>
            <p>
              Desktop Support & Network Technician [November 2016 - May 2018]
            </p>
            <p>dfsfds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
