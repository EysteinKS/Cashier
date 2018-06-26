import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { ProfileStore } from "../store/Store.js"
import Button from '@material-ui/core/Button';
import "./HomeProfile.css";

class HomeProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit: true,
      buttontext: "Edit"
      
    }
    ProfileStore.addListener(this.onChange);
  }

  componentWillUnmount() {
    ProfileStore.removeListener(this.onChange);
  }

  onChange = () => {
    this.forceUpdate();
  }

  clickHandler = () => {
    this.setState({ edit: !this.state.edit})
    if (this.state.edit === true){
      this.setState({ buttontext: "Save"})
    } else {
      this.setState({ buttontext: "Edit" })
    }
    this.forceUpdate();
  }

  handleChange = (e) => {
    this.setState({
      name : e.target.value,
    })
    ProfileStore.set({
      name: e.target.value,
    })
  }


  render(){
    return(
      <div className="profile-container">
        <h1 className="profile-grid-a">{ProfileStore["name"].charAt(0)}</h1>
        <TextField
          id="name"
          label="Name"
          value={ProfileStore["name"]}
          onChange={this.handleChange}
          margin="normal"
          disabled={this.state.edit}
          autoComplete="off"
          className="profile-grid-b"
        />
        <br/>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={this.clickHandler}
          className="profile-grid-c">
          {this.state.buttontext}
        </Button>
      </div>    
    )   
  }
}

export default HomeProfile;