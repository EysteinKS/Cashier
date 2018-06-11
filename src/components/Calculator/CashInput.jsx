import React, { Component } from "react";
import { Button } from "reactstrap";
import { Collapse } from "react-collapse";
import "./CashInput.css";

class CashInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: "0",
      collapse: false, //Toggle Collapse
      focus: true //Toggle Focus
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
    this.currency = "";
    this.handleChange = this.handleChange.bind(this);
    this.textInput = React.createRef();
    this.focusClick = this.focusClick.bind(this);
  }

  toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleFocus(){
    this.setState({ focus: !this.state.focus});
  }

  focusClick(){
    this.toggleCollapse();
    this.toggleFocus(); //Toggle state.focus true or false

    if (this.state.focus === true ){
      this.textInput.current.focus();
    } else {
      this.textInput.current.blur();
    }
    //Sets or removes focus from input
  }

  handleChange(e) {
    const re = /^[0-9\b]+$/;

    //Only allow numbers input
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
      this.setState((prevState, props) => ({
        result: prevState.value * props.currency
      }));
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
          color="grey" 
          onClick={this.focusClick} 
          style={{ marginBottom: '1rem'}}>
          {this.props.currency} = {this.state.result}
        </Button>
        <Collapse isOpened={this.state.collapse}>
          <form onKeyPress={this.onKeyPress}>
            <label className="grid-container">
              <input
                autoFocus
                className="grid-item-a"
                type="tel"
                value={this.state.value}
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