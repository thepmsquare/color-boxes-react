import React, { Component } from "react";
import "./Colorboxes.css";
import Box from "./Box";
class Colorboxes extends Component {
  constructor(props) {
    super(props);
    const colors = [];
    for (let i = 0; i < 18; i++) {
      colors.push(this.createRandomHex());
    }

    this.state = {
      colors: colors,
    };
  }

  createRandomHex() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ][Math.floor(Math.random() * 16)];
    }
    return hex;
  }
  changeColor = (e) => {
    let changedIndex = e.target.getAttribute("data-key");
    let updatedColors = [...this.state.colors];
    updatedColors[changedIndex] = this.createRandomHex();
    this.setState({
      colors: updatedColors,
    });
  };
  render() {
    return (
      <div className="Colorboxes">
        {this.state.colors.map((color, index) => {
          return (
            <section key={index} onClick={this.changeColor}>
              <Box hex={color} somekey={index} />
            </section>
          );
        })}
      </div>
    );
  }
}

export default Colorboxes;
