import React, { Component } from "react";
import store from "../store/Store";
import NumericInput from 'react-numeric-input';

class NumInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ""
    }

    this.numinput = ""
  }

  handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    //Only allow numbers input
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
      const { numinput } = this.props;
      store.set({
        [numinput]: e.target.value
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

  render(){
    return (
      <div>
        <input
          autoFocus
          className="grid-item-a"
          type="tel"
          value={store[this.props.numinput]}
          onChange={this.handleChange}
          maxLength="6"
          placeholder="Input Money Here"
        />
      </div>
    )
  }
}

export default NumInput;