import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  

  render() {
    return (
      <div>
        <h1>Home</h1>
        <br/>
        <h3>Profile Page</h3>
          <li>Employee ID</li>
          <li>Name</li>
          <li>Profile Picture</li>
          <li></li>
        <br/>
        <h3>Workplace</h3>
          <li>Current Workplace</li>       
          <li>Currency Selector</li>
          <li>Current Register</li>
        <br/>
        <h3>Register Shift</h3>
          <li>Start Shift Button</li>
          <li>End Shift Button</li>
      {
      //Profile Page
      //Workplace
      //Start & End of shift
      }
      </div>
    );
  }
}

export default Home;