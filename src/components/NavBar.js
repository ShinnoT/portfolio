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
            <i class="fab fa-github" />
            <i class="fab fa-linkedin" />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
