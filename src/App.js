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
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.renderApp = this.renderApp.bind(this);
  }

  componentDidMount() {
    AOS.init({ duration: 1000 });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  renderApp() {
    console.log("width: ", this.state.width);
    console.log("height: ", this.state.height);

    if (this.state.width > 1140 && this.state.height > 800) {
      return (
        <div className="App">
          <NavBar />
          <Cover />
          <SecondCover />
          <Technologies />
          <PersonalProjects />
          <Experience />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="cannot-view">
          <div className="cannot-view-info">
            <p>
              Dear site visitor, HOW DARE YOU VIEW MY SITE ON A SMALL SCREEN.
              Please whip out your laptop and come back for a better experience
              :)
            </p>
            <i className="fas fa-exclamation-circle cannot-icon" />
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="App">{this.renderApp()}</div>;
  }
}

export default App;
