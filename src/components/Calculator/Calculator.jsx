import React, { Component } from "react";
import { Button, Collapse, UncontrolledCollapse } from "reactstrap";
import getTotalAmount from "./CashCounterResult";
import getTotalTerminal from "./TerminalResult";
import store from "../store/Store";
import terminalstore from "../store/TerminalStore";
import "./Calculator.css";
import CashInput from "./CashInput";
import TerminalCounter from "./TerminalCounter";
import NumInput from "./NumInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCashCounter: false
    }
    store.addListener(this.onChange);
    terminalstore.addListener(this.onChange);
  };

  componentWillUnmount() {
    store.removeListener(this.onChange);
    terminalstore.removeListener(this.onChange);
  }

  onChange = () => {
    this.forceUpdate();
  }
  toggleCC = () => {
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
          <h3>Total Income = {store["totalincome"]}</h3>
        </Button>
        <UncontrolledCollapse toggler="#totalincome">
          <NumInput numinput="totalincome"/>
        </UncontrolledCollapse>
        <br />
        <Button
          className="toggleButton"
          color="grey"
          id="registerstart"
          style={{ marginBottom: '1rem' }}>
          <h3>Register at Start = {store["registerstart"]}</h3>
        </Button>        
        <UncontrolledCollapse toggler="#registerstart">
          <NumInput numinput="registerstart" />
        </UncontrolledCollapse>
        <br />
        <Button
          className="toggleButton"
          color="grey"
          onClick={this.toggleCC}
          style={{ marginBottom: '1rem' }}>
          <h3>Cash Counter = {getTotalAmount()}</h3>
        </Button>
        <Collapse isOpen={this.state.collapseCashCounter}>
          <CashInput currency="1000"/>
          <CashInput currency="500"/>
          <CashInput currency="200"/>
          <CashInput currency="100"/>
          <CashInput currency="50"/>
          <CashInput currency="20"/>
          <CashInput currency="10"/>
          <CashInput currency="5"/>
          <CashInput currency="1"/>
        </Collapse>
        <br/>
        <Button
          className="toggleButton"
          color="grey"
          id="terminalcounter"
          style={{ marginBottom: '1rem' }}>
          <h3>Terminal Counter = {getTotalTerminal()}</h3>
        </Button>
        <UncontrolledCollapse toggler="#terminalcounter">
          <TerminalCounter terminal="1"/>
          <TerminalCounter terminal="2" />
          <TerminalCounter terminal="3" />
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
