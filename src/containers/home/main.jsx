import React, { Component } from "react";
import Maintenance from "../../components/Maintenance/Maint";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default class main extends Component {
  render() {
    return (
      <div>
        <Maintenance />
        {/* <Navbar /> */}
        {/* <AboutMe /> */}
        {/* <Projects /> */}
        <Footer />
      </div>
    );
  }
}
