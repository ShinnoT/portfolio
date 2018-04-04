import React, { Component } from "react";
// import logo from './logo.svg';
import "./style/main.css";
import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import SecondCover from "./components/SecondCover";
import Technologies from "./components/Technologies";
import PersonalProjects from "./components/PersonalProjects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

class App extends Component {
  render() {
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
  }
}

export default App;
