import React, { Component } from 'react';
import {Store} from "./store/Store";
import {getTotalAmount} from "./Calculator/ResultFunctions";

class Result extends Component {
  constructor(props){
    super(props)
    Store.addListener(this.onChange);
  }
  componentWillUnmount() {
    Store.removeListener(this.onChange);
  }

  onChange = () => {
    this.forceUpdate();
  }

    render() {
        return (
            <div>
                <h1>Result</h1>
                <h3>Counter Total</h3>
                <p>{getTotalAmount() - Store["registerstart"]}</p>
                <h3>Difference</h3>
                <p>{(getTotalAmount() - Store["registerstart"]) - Store["totalincome"]}</p>
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