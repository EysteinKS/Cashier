import React, { Component } from 'react';
import { Store } from "../store/Store";
import { getTotalAmount, getCounterTotal, getDifference } from "../ResultFunctions";
import ResultContainer from "./ResultContainer"

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
                <ResultContainer />
                <h3>Counter Total</h3>
                <p>{getCounterTotal()}</p>
                <h3>Difference</h3>
                <p>{getDifference()}</p>
                <li>Comment</li>              
                <textarea>
                </textarea>
                <li>Save</li>
                {
                  /*
                  Vis:
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