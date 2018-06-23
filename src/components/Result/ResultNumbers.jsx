import React, { Component } from "react"

class ResultNumbers extends Component {
  constructor(props) {
    super(props)
    this.state = { result: "" }
  }

  render() {
    return (
      <div style={{ backgroundColor: "lightblue" }}>
        <p>Numbers</p>
      </div>
    )
  }
}

export default ResultNumbers;

/* 
Kasse Start
Kontant Total
Terminal Total
Terminal Tips Total
Differanse
*/