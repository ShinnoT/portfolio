import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar">
          <div className="left-content">
            <p>logo</p>
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
