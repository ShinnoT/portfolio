import React, { Component } from "react";
// import logo from './logo.svg';
import "./style/main.css";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p>Home Page here</p>
      </div>
    );
  }
}

export default App;
