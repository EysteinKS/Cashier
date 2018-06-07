import React, { Component } from "react";

class CashInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.currency = "";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A number was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>{this.props.currency}: </span>
          <input
            type="tel"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Input Money Here"
          />
        </label>
        <span>={this.state.value * this.props.currency}</span>
      </form>

      /* TODO: ADD FORM
      https://reactjs.org/docs/forms.html

      Props: Currency - Output 

       */
    );
  }
}

export default CashInput;
