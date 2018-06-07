import React, { Component } from "react";
import CashInput from "./CashInput";

class Calculator extends Component {
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <CashInput currency="1000" />
        <CashInput currency="500" />
        <CashInput currency="200" />
        <CashInput currency="100" />
        <CashInput currency="50" />
        <CashInput currency="20" />
        <CashInput currency="10" />
        <CashInput currency="5" />
        <CashInput currency="1" />
      </div>
    );
  }
}

export default Calculator;
