import React, { Component } from "react";
import Gif from "./Gif";
import Modal from "react-modal";

const gifChat = require("./../cropped-chat.gif");
const gifTours = require("./../cropped-hidden-tours.gif");
const gifScoreKeep = require("./../cropped-score-keep.gif");
const gifShortLink = require("./../cropped-shortlink.gif");
const gifTetris = require("./../cropped-tetris.gif");
const gifWeather = require("./../cropped-weather.gif");

Modal.defaultStyles.overlay.backgroundColor = "gray";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class PersonalProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(number) {
    const newState = this.state;
    newState[number] = true;
    this.setState({ ...newState });
  }

  closeModal(number) {
    const newState = this.state;
    newState[number] = false;
    this.setState({ ...newState });
  }

  render() {
    return (
      <div className="PersonalProjects">
        <div className="projects">
          <h1>Personal Projects</h1>
          <div className="projects-list">
            <div className="gif">
              <Gif
                title="Chat App"
                classes="fas fa-comments project-icon"
                onClick={this.openModal.bind(null, 1)}
              />
              <Modal
                isOpen={this.state["1"]}
                onRequestClose={this.closeModal.bind(null, 1)}
                style={modalStyles}
                className="Modal"
              >
                <img src={gifChat} alt="chat app" className="overlay-image" />
              </Modal>
            </div>
            <div className="gif">
              <Gif
                title="Tour App"
                classes="fas fa-plane project-icon"
                onClick={this.openModal.bind(null, 2)}
              />
              <Modal
                isOpen={this.state["2"]}
                onRequestClose={this.closeModal.bind(null, 2)}
                style={modalStyles}
                className="Modal"
              >
                <img src={gifTours} alt="tour app" className="overlay-image" />
              </Modal>
            </div>
            <div className="gif">
              <Gif
                title="Scoring App"
                classes="fas fa-star project-icon"
                onClick={this.openModal.bind(null, 3)}
              />
              <Modal
                isOpen={this.state["3"]}
                onRequestClose={this.closeModal.bind(null, 3)}
                style={modalStyles}
                className="Modal"
              >
                <img
                  src={gifScoreKeep}
                  alt="scroring app"
                  className="overlay-image"
                />
              </Modal>
            </div>
            <div className="gif">
              <Gif
                title="Link App"
                classes="fas fa-link project-icon"
                onClick={this.openModal.bind(null, 4)}
              />
              <Modal
                isOpen={this.state["4"]}
                onRequestClose={this.closeModal.bind(null, 4)}
                style={modalStyles}
                className="Modal"
              >
                <img
                  src={gifShortLink}
                  alt="link app"
                  className="overlay-image"
                />
              </Modal>
            </div>
            <div className="gif">
              <Gif
                title="Tetris"
                classes="fas fa-gamepad project-icon"
                onClick={this.openModal.bind(null, 5)}
              />
              <Modal
                isOpen={this.state["5"]}
                onRequestClose={this.closeModal.bind(null, 5)}
                style={modalStyles}
                className="Modal"
              >
                <img src={gifTetris} alt="tetris" className="overlay-image" />
              </Modal>
            </div>
            <div className="gif">
              <Gif
                title="Weather CLI"
                classes="fas fa-sun project-icon"
                onClick={this.openModal.bind(null, 6)}
              />
              <Modal
                isOpen={this.state["6"]}
                onRequestClose={this.closeModal.bind(null, 6)}
                style={modalStyles}
                className="Modal"
              >
                <img
                  src={gifWeather}
                  alt="weather app"
                  className="overlay-image"
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
