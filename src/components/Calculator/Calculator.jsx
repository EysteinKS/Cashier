import React, { Component } from "react";
import { Button, Collapse, UncontrolledCollapse } from "reactstrap";
import "./Calculator.css";
import CashInput from "./CashInput";

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapseCashCounter: false
    }

    this.toggleCC = this.toggleCC.bind(this);
  };

  toggleCC() {
    this.setState({ collapseCashCounter: !this.state.collapseCashCounter });
  }


  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <br/>
        <Button
          className="toggleButton"
          color="grey"
          id="totalincome"
          style={{ marginBottom: '1rem' }}>
          <h3>Total Income</h3>
        </Button>
        <UncontrolledCollapse toggler="#totalincome">
          <p>Insert Content Here!</p>
        </UncontrolledCollapse>
        <br />
        <Button
          className="toggleButton"
          color="grey"
          id="registerstart"
          style={{ marginBottom: '1rem' }}>
          <h3>Register at Start</h3>
        </Button>        
        <UncontrolledCollapse toggler="#registerstart">
          <p>Insert Content Here!</p>
        </UncontrolledCollapse>
        <br />
        <Button
          className="toggleButton"
          color="grey"
          onClick={this.toggleCC}
          style={{ marginBottom: '1rem' }}>
          <h3>Cash Counter</h3>
        </Button>
        <Collapse isOpen={this.state.collapseCashCounter}>
          <CashInput currency="1000" />
          <CashInput currency="500" />
          <CashInput currency="200" />
          <CashInput currency="100" />
          <CashInput currency="50" />
          <CashInput currency="20" />
          <CashInput currency="10" />
          <CashInput currency="5" />
          <CashInput currency="1" />
        </Collapse>
        <br/>
        <Button
          className="toggleButton"
          color="grey"
          id="terminalcounter"
          style={{ marginBottom: '1rem' }}>
          <h3>Terminal Counter</h3>
        </Button>
        <UncontrolledCollapse toggler="#terminalcounter">
          <p>Insert Content Here!</p>
        </UncontrolledCollapse>
        <br/>
      </div>
    );
  }
}

// Terminal (Antall, Inntekt, Tips)
// Totalt Tjent
// Kasse Start

export default Calculator;
