import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("IN constructor");
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  componentDidMount() {
    console.log("Component did mount ");
    console.log("*********************");
  }
  render() {
    console.log("im rendering");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>Hi</h1>
        <div className="counter">Counter = {this.state.counter}</div>
      </div>
    );
  }
  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("Component did update");
    console.log("**********************");
  }
}
