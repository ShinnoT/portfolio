import React, { Component } from "react";
import "./style/main.css";
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import SecondCover from "./components/SecondCover";
import Technologies from "./components/Technologies";
import PersonalProjects from "./components/PersonalProjects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import AOS from "aos";
import MediaQuery from "react-responsive";

import "../node_modules/aos/dist/aos.css";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={1100}>
          <NavBar />
          <Cover />
          <SecondCover />
          <Technologies />
          <PersonalProjects />
          <Experience />
          <Footer />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1100}>
          <div className="cannot-view">
            <div className="cannot-view-info">
              <p>
                Dear site visitor, HOW DARE YOU VIEW MY SITE ON A SMALL SCREEN.
                Please whip out your laptop and come back for a better
                experience :)
              </p>
              <i className="fas fa-exclamation-circle cannot-icon" />
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
