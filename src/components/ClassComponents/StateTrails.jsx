import React, { Component } from "react";

export class StateTrails extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  changeValue() {
    this.state.count = 10;
  };

  render() {
    console.log('state trails',this.state)
    return (
      <>
        <h2>StateTrails</h2><h4>{this.state.count}</h4>{" "}
        <button onClick={this.changeValue()}>Click</button>
      </>
    );
  }
}

export default StateTrails;
