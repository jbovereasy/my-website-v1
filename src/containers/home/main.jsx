import React, { Component } from "react";
// import Maintenance from "../../components/Maintenance/Maint";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutMe from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Tools from "../../components/DevTools/Tools";

export default class main extends Component {
  render() {
    return (
      <div>
        {/* <Maintenance /> */}
        <Navbar />
        <AboutMe />
        <Experience />
        <Tools />
        {/* <Projects /> */}
        <Footer />
      </div>
    );
  }
}
