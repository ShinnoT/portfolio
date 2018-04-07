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
            <div className="card">
              <i className="icon-html5-alt" />
              <p>HTML</p>
            </div>
            <div className="card">
              <i className="icon-css3-alt" />
              <p>CSS</p>
            </div>
            <div className="card">
              <i className="icon-javascript-alt" />
              <p>JavaScript</p>
            </div>
            <div className="card">
              <i className="icon-reactjs" />
              <p>React</p>
            </div>
            <div className="card">
              <i className="icon-nodejs" />
              <p>Node.js</p>
            </div>
            <div className="card">
              <i className="icon-ruby-on-rails-alt" />
              <p>Ruby on Rails</p>
            </div>
            <div className="card">
              <i className="icon-ubuntu" />
              <p>Linux Ubuntu</p>
            </div>
            <div className="card">
              <i className="icon-mongodb" />
              <p>NoSQL</p>
            </div>
            <div className="card">
              <i className="icon-database" />
              <p>SQL</p>
            </div>
            <div className="card">
              <i className="icon-git" />
              <p>Git</p>
            </div>
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
