import React, { Component } from "react";
import LifecycleB from './LifeCycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ashish",
    };

    console.log("Lifecycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method of lifecycleA");
    return null;
  }

  componentDidMount() {
    console.log("life cycle A componentDidMount");
  }

  render() {
    console.log("life cycle A render");
    return (
        <div>
            <div>Life cycle A</div>
            <LifecycleB/>
        </div>

    )
  }
}

export default LifecycleA;
