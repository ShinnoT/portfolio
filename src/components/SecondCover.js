import React, { Component } from "react";

class SecondCover extends Component {
  constructor(props) {
    super(props);
    // this.initials = React.createRef();
    this.state = {
      styles: {}
    };
    this.scrollLoop = this.scrollLoop.bind(this);
  }

  componentDidMount() {
    // const initials = this.initials.current;
    window.addEventListener("scroll", this.scrollLoop, false);
  }

  scrollLoop(e) {
    const that = this;
    const setTranslate = (xPos, yPos) => {
      that.setState({
        styles: {
          transform: `translate3d(${xPos}px, ${yPos}px, 0)`
        }
      });
    };
    let yScrollPosition = window.scrollY;
    setTranslate(0, yScrollPosition * 0.35);
    requestAnimationFrame(this.scrollLoop);
  }

  render() {
    return (
      <div className="SecondCover">
        <h1>second cover</h1>
        <div
          className="initials"
          // ref={this.initials}
          style={this.state.styles}
        />
      </div>
    );
  }
}

export default SecondCover;
