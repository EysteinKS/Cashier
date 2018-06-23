import React, { Component } from 'react';
import { Store } from "../store/Store";
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