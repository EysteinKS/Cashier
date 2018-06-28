import React, { Component } from "react";
import TerminalCounter from "./TerminalCounter"; 
import { Button } from "reactstrap";
import { Collapse } from "react-collapse";
import { getTotalTerminal} from "../ResultFunctions";

class TerminalContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      terminalAmount: "",
      collapse: false,
    }
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  handleTerminalAmount = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ terminalAmount: e.target.value });
    }
  }

  renderTerminals = () => {
    let terminals = []

    for (let i = 0; i < this.state.terminalAmount; i++) {
      terminals.push(<TerminalCounter terminal={i + 1} />)
    }

    return terminals
  }

  render(){
    return(
      <div>
        <Button
          className="toggleButton"
          color="grey"
          onClick={this.toggleCollapse}
          style={{ marginBottom: '1rem' }}>
          <h3>Terminal Counter = {getTotalTerminal()}</h3>
          <input
            type="tel"
            value={this.state.terminalAmount}
            onChange={this.handleTerminalAmount}
            maxLength="1"
            placeholder="How many terminals?"
          />
        </Button>
        <Collapse isOpened={this.state.collapse}>
          {this.renderTerminals()}
        </Collapse>
      </div>
    )
  }
}

export default TerminalContainer;