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
        <div className="content">
          <div className="info">
            <h1>Yes I like flamingos.</h1>
            <h2>But, I also like code.</h2>
          </div>
          <div className="languages">
            <p>JavaScript</p>
            <p>Node.js</p>
            <p>Ruby on Rails</p>
            <p>R</p>
            <p>CSS</p>
            <p>HTML</p>
          </div>
        </div>
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
