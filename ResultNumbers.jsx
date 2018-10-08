import React, { Component } from "react"
import { getTotalAmount, getCounterTotal, getDifference, getTotalTips, getTotalTerminal } from "../ResultFunctions";
import { auth, firestore } from "../Firebase/"

const addZero = time => {
  if (time < 10) {
    time = "0" + time
    return time
  } else {
    return time
  }
}

class ResultNumbers extends Component {
  constructor(props) {
    super(props)
    this.state = { result: "" }
  }


  _save = (event) => { 
    let date = new Date()
    let day = addZero(date.getDate())
    let month = addZero(date.getMonth())
    let year = date.getFullYear()
    let time = day.toString() + month.toString() + year.toString()
    firestore.saveResult(auth.getUser(), time, getCounterTotal(), getTotalTips(), getTotalTerminal(), getDifference());
  }

  _test = () =>
    console.log(auth.getUserName())

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <h3>Numbers</h3>
        <p>Counter Total = {getCounterTotal()}</p>
        <p>Terminal Total = {getTotalTerminal()}</p>
        <p>Terminal Tips = {getTotalTips()}</p>
        <p>Difference = {getDifference()}</p>
        <button onClick={this._save}>Save</button>
        <button onClick={this._test}>Test</button>
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