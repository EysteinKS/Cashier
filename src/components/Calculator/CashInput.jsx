import React, { Component } from "react";

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

  render() {
    return (
      <form>
        <label>
          <span>{this.props.currency}: </span>
          <input
            type="tel"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Input Money Here"
          />
        </label>
        <span>={this.state.result}</span>
      </form>
    );
  }
}

export default CashInput;
