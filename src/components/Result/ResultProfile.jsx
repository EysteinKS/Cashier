import React, { Component } from "react"

class ResultProfile extends Component {
  constructor(props) {
    super(props)
    this.state = { result: "" }
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <h3>Profile</h3>
        <p>Name + Picture</p>
        <p>Workplace + Register</p>
        <p>Shift Start & End</p>
      </div>
    )
  }
}

export default ResultProfile;