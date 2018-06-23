import React, { Component } from "react";
import { Button } from "reactstrap";
import { Collapse } from "react-collapse";
import { TerminalStore } from "../store/Store";
import "./CashInput.css";

class TerminalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      collapse: false, //Toggle Collapse
      focus: true //Toggle Focus
    };

    this.terminal = "";
    this.textInput = React.createRef();
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleFocus = () => {
    this.setState({ focus: !this.state.focus });
  }
  focusClick = () => {
    this.toggleCollapse();
    this.toggleFocus(); //Toggle state.focus true or false

    if (this.state.focus === true) {
      this.textInput.current.focus();
    } else {
      this.textInput.current.blur();
    }
    //Sets or removes focus from input
  }

  handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    //Only allow numbers input
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
      const { terminal } = this.props;
      TerminalStore.set({
        [terminal]: e.target.value
      });
    }
    //Update value and result on change
  }

  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
    //Prevent action on enter
  }

  render() {
    return (
      <div>
        <Button
          className="toggleCashInput"
          color="grey"
          onClick={this.focusClick}
          style={{ marginBottom: '1rem' }}>
          {this.props.terminal} = {TerminalStore[this.props.terminal]}
        </Button>
        <Collapse isOpened={this.state.collapse}>
          <form onKeyPress={this.onKeyPress}>
            <label className="grid-container">
              <input
                autoFocus
                className="grid-item-a"
                type="number"
                value={TerminalStore[this.props.terminal]}
                onChange={this.handleChange}
                maxLength="5"
                placeholder="Input Money Here"
                ref={this.textInput}
              />
            </label>
          </form>
        </Collapse>
      </div>
    );
  }
}

export default TerminalCounter;