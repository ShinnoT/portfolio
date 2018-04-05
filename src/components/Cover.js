import React, { Component } from "react";

const flamingo = require("./../white-flamingo.svg");
const flamingoTwo = require("./../white-flamingo2.svg");
const flamingoThree = require("./../flamingo-3.svg");

class Cover extends Component {
  render() {
    return (
      <div className="Cover">
        <div className="content">
          <div className="info">
            <h1>SHINNO</h1>
            <h2>TAGUCHI</h2>
          </div>
          <img src={flamingoThree} alt="flamingo" />
        </div>
      </div>
    );
  }
}

export default Cover;
