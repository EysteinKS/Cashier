import React, { Component } from "react"
import { getTotalAmount, getCounterTotal, getDifference, getTotalTips, getTotalTerminal } from "../ResultFunctions";

class ResultNumbers extends Component {
  constructor(props) {
    super(props)
    this.state = { result: "" }
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <h3>Numbers</h3>
        <p>Counter Total = {getCounterTotal()}</p>
        <p>Terminal Total = {getTotalTerminal()}</p>
        <p>Terminal Tips = {getTotalTips()}</p>
        <p>Difference = {getDifference()}</p>
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