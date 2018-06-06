import React, { Component } from 'react';
import CashInput from "./CashInput";

class Calculator extends Component {
    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <CashInput />
            </div>
        );
    }
}

export default Calculator;