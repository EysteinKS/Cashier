import React, { Component } from "react";
import "./App.css";
import "./Display.css";
import { BrowserRouter, Route } from "react-router-dom";
import * as routes from '../constants/routes';

//App components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home.jsx";
import Calculator from "./Calculator/Calculator";
import Result from "./Result/Result";
import Landing from './Server/Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import PasswordForget from './Server/PasswordForget';
import Account from './Server/Account';
import withAuthentication from "./withAuthentication";

const App = () =>
  <BrowserRouter>
    <div className="App" style={{ backgroundColor: "#CAFAFE" }}>
      <Header className="center" />
      <Route className="full-height" path="/" exact component={Home} />
      <Route className="full-height" path="/calculator" component={Calculator} />
      <Route className="full-height" path="/result" component={Result} />
      <Route className="full-height" exact path={routes.LANDING} component={() => <Landing />} />
      <Route className="full-height" exact path={routes.SIGN_UP} component={() => <SignUp />} />
      <Route className="full-height" exact path={routes.SIGN_IN} component={() => <SignIn />} />
      <Route className="full-height" exact path={routes.PASSWORD_FORGET} component={() => <PasswordForget />} />
      <Route className="full-height" exact path={routes.ACCOUNT} component={() => <Account />} />
      <Footer />
    </div>
  </BrowserRouter>


/*
Todo:
Home
Result
*/
  
/*
 Colors: http://blog.visme.co/website-color-schemes/ #5
 Check https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00 */

export default withAuthentication(App);
