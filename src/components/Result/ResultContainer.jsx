import React, { Component } from "react"
import ResultNumbers from "./ResultNumbers"
import ResultProfile from "./ResultProfile"
import "./ResultContainer.css"

class ResultContainer extends Component {
  constructor(props){
    super(props)
    this.state = { result: "" }
  }

  render(){
    return(
      <main>
      <section className="grid-container">
        <div className="grid-item-a">
        <ResultProfile/>
        </div>
      </section>
      <section className="grid-container">
        <div className="grid-item-a">
          <ResultNumbers/>
        </div>
      </section>
      </main>
    )
  }
}

export default ResultContainer;