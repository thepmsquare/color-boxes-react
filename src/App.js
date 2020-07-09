import React, { Component } from "react";
import "./App.css";
import Colorboxes from "./Colorboxes";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Colorboxes />
        <p>Click on a box to change its color.</p>
      </div>
    );
  }
}

export default App;
