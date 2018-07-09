import React, { Component } from 'react'
import  * as firebase from "firebase";
import { getTotalAmount, getCounterTotal, getDifference, getTotalTips, getTotalTerminal } from "../ResultFunctions";

import React, { PureComponent } from 'react'

export default class SaveResult extends Component {
    constructor(){
        this.colRef = firebase.firestore().collection('results');

        this.state = {
            fetching: false,
            docs: []
           };

        /*TODO:
        Create new collection 
        Find collections
        Create new document in collection
        Name documents by time and day

        */
    }


  render() {
    return (
      <div>
        <button>
            Save
        </button>
      </div>
    )
  }
}
