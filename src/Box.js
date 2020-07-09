import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.props.hex }}
        data-key={this.props.somekey}
      >
        <section className="Box-Text" data-key={this.props.somekey}>
          {this.props.hex}
        </section>
      </div>
    );
  }
}

export default Box;
