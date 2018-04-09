import React, { Component } from "react";
import Gif from "./Gif";

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
              <Gif title="Chat App" classes="fas fa-comments project-icon" />
            </div>
            <div className="gif">
              <Gif title="Tour App" classes="fas fa-plane project-icon" />
            </div>
            <div className="gif">
              <Gif title="Scoring App" classes="fas fa-star project-icon" />
            </div>
            <div className="gif">
              <Gif title="Link App" classes="fas fa-link project-icon" />
            </div>
            <div className="gif">
              <Gif title="Tetris" classes="fas fa-gamepad project-icon" />
            </div>
            <div className="gif">
              <Gif title="Weather CLI" classes="fas fa-sun project-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
