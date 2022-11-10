import React, { Component } from "react";

export class StateTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Pedro",
      counter: 0,
      obj: {
        name: 'Hello'
      }
    };
    console.log(this.props.name)
  }
  onChange(event) {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
  }

  incrementCount() {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      //callback for setState - to execute code after setState
      // () => {
      //   console.log("Callback value for state", this.state.counter); 
      // }
    // prevState => ({
    //     counter: prevState.counter + 1
    // })
    );
  }

  incrementFive() {
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
  }

  render() {
    const {counter, inputValue} = this.state;

    return (
      <div>
        <h3>state and setState</h3>
        <h4>{this.props.name}</h4>
        <input
          placeholder="enter something..."
          onChange={() => this.onChange()}
        />
        {inputValue}
        <div>Count - {counter}</div>
        <button onClick={() => this.incrementCount()}>Increment Counter</button> <br />
        <button onClick={() => this.incrementFive()}>Increment 5</button>
      </div>
    );
  }
}

export default StateTutorial;
