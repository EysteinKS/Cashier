import React, { Component } from "react";
import { Button, Collapse, UncontrolledCollapse } from "reactstrap";
import "./Calculator.css";

import { getTotalAmount } from "../ResultFunctions";

import { Store, TerminalStore } from "../store/Store";

import CashInput from "./CashInput";
import NumInput from "./NumInput";
import TerminalContainer from "./TerminalContainer";
import AuthUserContext from "../AuthUserContext";
import withAuthorization from "../withAuthorization"

const Calculator = () =>
  <AuthUserContext.Consumer>
    {authUser => 
      <CalculatorPage/>
    }
  </AuthUserContext.Consumer>

class CalculatorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCashCounter: false,
    }
    Store.addListener(this.onChange);
    TerminalStore.addListener(this.onChange);
  };

  componentWillUnmount() {
    Store.removeListener(this.onChange);
    TerminalStore.removeListener(this.onChange);
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
        <section>
          <Button
            className="toggleButton"
            color="grey"
            id="totalincome"
            style={{ marginBottom: '1rem' }}>
            <h3>Total Income = {Number(Store["totalincome"])}</h3>
            {/* Turn string to int, but return 0 if value = NaN */}
          </Button>
          <UncontrolledCollapse toggler="#totalincome">
            <NumInput numinput="totalincome" />
          </UncontrolledCollapse>
        </section>
        <section>
          <Button
            className="toggleButton"
            color="grey"
            id="registerstart"
            style={{ marginBottom: '1rem' }}>
            <h3>Register at Start = {Number(Store["registerstart"])}</h3>
          </Button>
          <UncontrolledCollapse toggler="#registerstart">
            <NumInput numinput="registerstart" />
          </UncontrolledCollapse>
        </section>
        <section>
          <Button
            className="toggleButton"
            color="grey"
            onClick={this.toggleCC}
            style={{ marginBottom: '1rem' }}>
            <h3>Cash Counter = {getTotalAmount()}</h3>
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
        </section>
        <section>
          <TerminalContainer/>
        </section>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Calculator)
