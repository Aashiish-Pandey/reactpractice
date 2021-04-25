import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ashish",
    };

    console.log("Lifecycle A constructor");
  }

  changestateHandler() {
    this.setState({
      name: "RAM RAM",
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method of lifecycleA");
    return null;
  }

  shouldComponentUpdate() {
    console.log("Life cycle A , should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle A , getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Life cycle A , componentDidUpdate");
  }

  componentDidMount() {
    console.log("life cycle A componentDidMount");
  }

  render() {
    console.log("life cycle A render");
    return (
      <div>
        <div>Life cycle A</div>
        <button onClick={this.changestateHandler}></button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
