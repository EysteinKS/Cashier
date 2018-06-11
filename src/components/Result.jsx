import React, { Component } from 'react';
import Button from "reactstrap";
import Collapse from "react-collapse";

class Result extends Component {
    render() {
        return (
            <div>
                <h1>Result</h1>
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