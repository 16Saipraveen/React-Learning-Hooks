import React, { Component } from "react";
import StateTrails from "./StateTrails";
import StateTutorial from "./StateTutorial";

class ClassComponents extends Component {
  render() {
    return (
      <div>
        <h2>ClassComponents</h2>
        <StateTutorial name="Hello">
          <StateTrails />
        </StateTutorial>
        <StateTutorial />
      </div>
    );
  }
}

export default ClassComponents;
