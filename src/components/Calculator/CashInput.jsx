import React, { Component } from "react";
import "./CashInput.css";

class CashInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: "0"
    };
    this.currency = "";
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState((prevState, props) => ({
      result: prevState.value * props.currency
    }));
  }

  onKeyPress(event){
    if (event.which === 13){
      event.preventDefault();
    }
    //Prevent action on enter
  }

  render() {
    return (
      <form onKeyPress={this.onKeyPress}>
        <label className="grid-container">
          <span className="grid-item">{this.props.currency}: </span>
          <input
            className="grid-item"
            type="tel"
            value={this.state.value}
            onChange={this.handleChange}
            maxLength = "3"
            placeholder="Input Money Here"
          />
          <span className="grid-item">{this.state.result}</span>
        </label>
      </form>
    );
  }
}

export default CashInput;
