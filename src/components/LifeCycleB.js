import React, { Component } from "react";
class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ashish",
    };

    console.log("Lifecycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method of lifecycleB");
    return null;
  }

  shouldComponentUpdate() {
    console.log("Life cycle B , should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle B , getSnapshotBeforeUpdate");
    return null
}
  }

  componentDidUpdate() {
    console.log("Life cycle B , componentDidUpdate");
  }

  componentDidMount() {
    console.log("life cycle B componentDidMount");
  }

  render() {
    console.log("life cycle B render");
    return <div>Life cycle B</div>;
  }
}

export default LifecycleB;
