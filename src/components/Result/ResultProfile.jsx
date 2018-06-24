import React, { Component } from "react"
import { ProfileStore } from "../store/Store.js"

class ResultProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { result: "" }
    ProfileStore.addListener(this.onChange);
  };
  componentWillUnmount() {
    ProfileStore.removeListener(this.onChange);
  }

  onChange = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <h3>Profile</h3>
        <p>{ProfileStore["name"]} + Picture</p>
        <p>Workplace + Register</p>
        <p>Shift Start & End</p>
      </div>
    )
  }
}

export default ResultProfile;