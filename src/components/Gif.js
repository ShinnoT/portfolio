import React, { Component } from "react";

class Gif extends Component {
  render() {
    return (
      <div className="Gif">
        <div
          className="static project-size"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <p>{this.props.title}</p>
          <i className={this.props.classes} />
        </div>
      </div>
    );
  }
}

export default Gif;
