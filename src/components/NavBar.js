import React, { Component } from "react";

const logo = require("./../logo.svg");

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar">
          <div className="left-content">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="right-content">
            <a href="https://github.com/shinnot" target="_blank">
              <i className="fab fa-github" /> GitHub
            </a>
            <a href="#">
              <i className="fab fa-linkedin" /> Linkedin
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
