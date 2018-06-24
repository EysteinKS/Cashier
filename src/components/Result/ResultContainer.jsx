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
      <section className="grid-container-result">
          <div className="grid-item-a-result" style={{ backgroundColor: "#97CAEF" }}>
        <ResultProfile/>
        </div>
      </section>
      <section className="grid-container-result">
          <div className="grid-item-a-result" style={{ backgroundColor: "#97CAEF" }}>
          <ResultNumbers/>
        </div>
      </section>
      </main>
    )
  }
}

export default ResultContainer;