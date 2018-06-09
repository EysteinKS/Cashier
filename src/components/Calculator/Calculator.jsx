import React, { Component } from "react";
import CashInput from "./CashInput";

class Calculator extends Component {
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <br/>
        <h3>Total Income</h3>
        <br/>
        <h3>Register at Start</h3>
        <br/>
        <h3>Register Counter</h3>
        <CashInput currency="1000" />
        <CashInput currency="500" />
        <CashInput currency="200" />
        <CashInput currency="100" />
        <CashInput currency="50" />
        <CashInput currency="20" />
        <CashInput currency="10" />
        <CashInput currency="5" />
        <CashInput currency="1" />
        <br/>
        <h3>Terminal Counter</h3>
        <br/>
        <h3></h3>
      </div>
    );
  }
}

// Terminal (Antall, Inntekt, Tips)
// Totalt Tjent
// Kasse Start

export default Calculator;
