import React, { Component } from "react";
import { Button } from "reactstrap";
import { Collapse } from "react-collapse";
import { TerminalStore, TipsStore } from "../store/Store";

import "./CashInput.css";

class TerminalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tips: "",
      collapse: false, //Toggle Collapse
      focus: true, //Toggle Focus
      showTips: true,
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

  handleTips = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ tips: e.target.value });
      const { terminal } = this.props;
      TipsStore.set({
        [terminal]: e.target.value
      });
    }
  }

  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
    //Prevent action on enter
  }

  renderTips = () => {
    if (this.state.showTips === true){
      return(
        <input
          className="grid-item-a"
          type="tel"
          value={TipsStore[this.props.terminal]}
          onChange={this.handleTips}
          maxLength="5"
          placeholder="Input Tips Here"
        />
      )      
    }
  }

  render() {
    return (
      <div>
        <Button
          className="toggleCashInput"
          color="grey"
          onClick={this.focusClick}
          style={{ marginBottom: '1rem', backgroundColor: "#a5eaff" }}>
          Terminal {this.props.terminal} = {Number(TerminalStore[this.props.terminal])} + {Number(TipsStore[this.props.terminal]) + " in tips"}
        </Button>
        <Collapse isOpened={this.state.collapse}>
          <form onKeyPress={this.onKeyPress}>
            <label className="grid-container">
              <input
                autoFocus
                className="grid-item-a"
                type="tel"
                value={TerminalStore[this.props.terminal]}
                onChange={this.handleChange}
                maxLength="5"
                placeholder="Input Money Here"
                ref={this.textInput}
              />
              {this.renderTips()}
            </label>
          </form>
        </Collapse>
      </div>
    );
  }
}

export default TerminalCounter;