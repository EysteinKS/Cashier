import React, { Component } from "react";
import "./Home.css";
import "./Display.css";
import HomeProfile from "./Home/HomeProfile"

class Home extends Component {
  

  render() {
    return (
      <div className="grid-container">
        <h1 className="grid-item-a">Home</h1>
        <br/>
        <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
            <h3>Profile Page</h3>
            <HomeProfile />
            <li></li>
          </section>
        <br/>
        <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
          <h3>Workplace</h3>
          <li>Current Workplace</li>       
          <li>Currency Selector</li>
          <li>Current Register</li>
        </section>
        <br/>
        <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
        <h3>Register Shift</h3>
          <li>Start Shift Button</li>
          <li>End Shift Button</li>
        </section>
        
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