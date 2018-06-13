import React, { Component } from 'react';
import Button from "reactstrap";
import Collapse from "react-collapse";
import store from "./store/Store";
import getTotalAmount from "./Calculator/CashCounterResult";

class Result extends Component {
  constructor(props){
    super(props)
    store.addListener(this.onChange);
  }
  componentWillUnmount() {
    store.removeListener(this.onChange);
  }

  onChange = () => {
    this.forceUpdate();
  }

    render() {
        return (
            <div>
                <h1>Result</h1>
                <h3>Counter Total</h3>
                <p>{getTotalAmount() - store["registerstart"]}</p>
                <h3>Difference</h3>
                <p>{(getTotalAmount() - store["registerstart"]) - store["totalincome"]}</p>
                <li>Comment</li>              
                <textarea>
                </textarea>
                <li>Save</li>
                {
                  /*
                  Vis:
                  Kasse Start
                  Kontant Total
                  Terminal Total
                  Terminal Tips Total
                  Differanse
                  Ansatt
                  Arbeidsplass
                  Oppgjør registrert klokkeslett
                  Kommentar
                  */
                }
            </div>
        );
    }
}

export default Result;