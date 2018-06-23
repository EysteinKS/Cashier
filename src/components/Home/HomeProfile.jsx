import React, { Component } from "react"

class HomeProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      buttontext: "Edit"
    }
  }

  clickHandler = () => {
    this.setState({ edit: !this.state.edit})
    if (this.state.edit === true){
      this.setState({ buttontext: "Edit"})
    } else {
      this.setState({ buttontext: "Save" })
    }
  }

  render(){
    if (this.state.edit === false){
      return(
        <div>
        <p>Disabled</p>
        <button onClick={this.clickHandler}>
          {this.state.buttontext}
        </button>
        </div>
      )
    } else {
      return(
        <div>
        <p>Enabled</p>
        <button onClick={this.clickHandler}>
          {this.state.buttontext}
        </button>     
        </div>
      )
    }
    
  }
}

export default HomeProfile;