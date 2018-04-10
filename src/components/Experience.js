import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <h1>Experience</h1>
        <div className="job-content">
          <div className="job">
            <h1>T-Hearth</h1>
            <div className="job-description">
              <p>Back-end Ruby on Rails Web Developer (Software Engineer).</p>
              <i className="fas fa-home job-icon" />
              <a href="https://live-n-tokyo.com/">visit</a>
            </div>
          </div>
          <div className="job">
            <h1>Ship&Co</h1>
            <div className="job-description">
              <p>Full-stack Node.js Web Developer (Software Engineer).</p>
              <i className="fas fa-shipping-fast job-icon" />
              <a href="https://www.shipandco.com/en/">visit</a>
            </div>
          </div>
          <div className="job">
            <h1>Le Wagon</h1>
            <div className="job-description">
              <p>
                Teacher assistant for basic Ruby, in an intensive coding
                bootcamp.
              </p>
              <i className="fas fa-graduation-cap job-icon" />
              <a href="https://www.lewagon.com/tokyo">visit</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
