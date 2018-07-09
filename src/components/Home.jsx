import React from "react";
import "./Home.css";
import "./Display.css";
import HomeProfile from "./Home/HomeProfile"
import SignInForm from "./SignIn"

import AuthUserContext from "./AuthUserContext";

const HomePage = () =>
  <div>
    <AuthUserContext.Consumer>
      { authUser => authUser
        ? <AuthHome />
        : <UnAuthHome />
      }
      </AuthUserContext.Consumer>
  </div>

const AuthHome = () =>
  <div className="grid-container">
  <h1 className="grid-item-a">Home</h1>
  <br/>
  <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
    <h3>Welcome to Oppgjør</h3>
    <ul>
      <li>Making your cashier balancing easier</li>
      <li>Collect your results, add collaborators and share with your workplace</li>
    </ul>
  <img src="https://thumbs.dreamstime.com/b/close-up-hand-counting-money-calculator-business-finance-tax-people-concept-woman-us-dollar-60854942.jpg"
    alt="$"/>
  </section>
  </div>

const UnAuthHome = () =>
  <div className="grid-container">
  <h1 className="grid-item-a">Home</h1>
  <br/>
  <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
    <h3>Welcome to Oppgjør</h3>
    <ul>
      <li>Making your cashier balancing easier</li>
      <li>Collect your results, add collaborators and share with your workplace</li>
    </ul>
  <img src="https://thumbs.dreamstime.com/b/close-up-hand-counting-money-calculator-business-finance-tax-people-concept-woman-us-dollar-60854942.jpg"
    alt="$"/>
  <SignInForm/>
  </section>
  </div>   

export default HomePage;