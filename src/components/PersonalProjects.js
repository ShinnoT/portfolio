import React, { Component } from "react";

const staticChat = require("./../cropped-chat.png");
const gifChat = require("./../cropped-chat.gif");
const staticTours = require("./../cropped-hidden-tours.png");
const gifTours = require("./../cropped-hidden-tours.gif");
const staticScoreKeep = require("./../cropped-score-keep.png");
const gifScoreKeep = require("./../cropped-score-keep.gif");
const staticShortLink = require("./../cropped-shortlink.png");
const gifShortLink = require("./../cropped-shortlink.gif");
const staticTetris = require("./../cropped-tetris.png");
const gifTetris = require("./../cropped-tetris.gif");
const staticWeather = require("./../cropped-weather.png");
const gifWeather = require("./../cropped-weather.gif");

class PersonalProjects extends Component {
  render() {
    return (
      <div className="PersonalProjects">
        <div className="projects">
          <h1>Personal Projects</h1>
          <div className="projects-list">
            <div className="gif">
              <img
                src={staticChat}
                alt="chat app"
                className="static project-size"
              />
              <img
                src={gifChat}
                alt="chat app gif"
                className="non-static project-size"
              />
            </div>
            <div className="gif">
              <img
                src={staticTours}
                alt="tours app"
                className="static project-size"
              />
              <img
                src={gifTours}
                alt="tours app gif"
                className="non-static project-size"
              />
            </div>
            <div className="gif">
              <img
                src={staticScoreKeep}
                alt="score keep"
                className="static project-size"
              />
              <img
                src={gifScoreKeep}
                alt="scoreK gif"
                className="non-static project-size"
              />
            </div>
            <div className="gif">
              <img
                src={staticShortLink}
                alt="shortlink"
                className="static project-size"
              />
              <img
                src={gifShortLink}
                alt="srtlnk gif"
                className="non-static project-size"
              />
            </div>
            <div className="gif">
              <img
                src={staticTetris}
                alt="tetris"
                className="static project-size"
              />
              <img
                src={gifTetris}
                alt="tetris gif"
                className="non-static project-size"
              />
            </div>
            <div className="gif">
              <img
                src={staticWeather}
                alt="weather"
                className="static project-size"
              />
              <img
                src={gifWeather}
                alt="weather gif"
                className="non-static project-size"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
