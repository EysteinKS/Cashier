import React, { Component } from "react";
import { Button } from "reactstrap";
import { Collapse } from "react-collapse";
import { Store } from "../store/Store";
import "./CashInput.css";
import "../Display.css"

class CashInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      collapse: false, //Toggle Collapse
      focus: true //Toggle Focus
    };

    this.currency = "";
    this.textInput = React.createRef();
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleFocus = () => {
    this.setState({ focus: !this.state.focus});
  }
  focusClick = () => {
    this.toggleCollapse();
    this.toggleFocus(); //Toggle state.focus true or false

    if (this.state.focus === true ){
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
      const { currency } = this.props;
      Store.set({
        [currency]: e.target.value
      });
    }   
    //Update value and result on change
  }

  onKeyPress(event){
    if (event.which === 13){
      event.preventDefault();
    }
    //Prevent action on enter
  }

  render() {
    return (
      <div>
        <Button
          className = "toggleCashInput"
          color="#97CAEF" 
          onClick={this.focusClick} 
          style={{ marginBottom: '1rem', backgroundColor: "#a5eaff"}}>
          {this.props.currency} = {Store[this.props.currency] * this.props.currency}
        </Button>
        <Collapse isOpened={this.state.collapse}>
          <form onKeyPress={this.onKeyPress}>
            <label className="grid-container">
              <input
                autoFocus
                className="grid-item-a"
                type="tel"
                value={Store[this.props.currency]}
                onChange={this.handleChange}
                maxLength = "3"
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

export default CashInput;