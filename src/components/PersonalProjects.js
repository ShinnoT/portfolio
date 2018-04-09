import React, { Component } from "react";

const staticChat = require("./../cropped-chat.png");
const gifChat = require("./../cropped-chat.gif");

class PersonalProjects extends Component {
  render() {
    return (
      <div className="PersonalProjects">
        <div className="projects">
          <h1>Personal Projects</h1>
          <div className="projects-list">
            <div className="gif">
              <img src={staticChat} alt="" className="static" />
              <img src={gifChat} alt="" className="non-static" />
            </div>
            <div className="gif">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bicycle.svg/444px-Bicycle.svg.png"
                alt=""
                className="static"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/560px-Bananas.svg.png"
                alt=""
                className="non-static"
              />
            </div>
            <div className="gif">
              <img src="" alt="" className="static" />
              <img src="" alt="" className="non-static" />
            </div>
            <div className="gif">
              <img src="" alt="" className="static" />
              <img src="" alt="" className="non-static" />
            </div>
            <div className="gif">
              <img src="" alt="" className="static" />
              <img src="" alt="" className="non-static" />
            </div>
            <div className="gif">
              <img src="" alt="" className="static" />
              <img src="" alt="" className="non-static" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
