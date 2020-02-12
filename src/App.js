import React from "react";
import "./styles.css";
import Counter from "./counter";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }
  render() {
    return (
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount COunter
        </button>

        <Counter />
      </div>
    );
  }
}
