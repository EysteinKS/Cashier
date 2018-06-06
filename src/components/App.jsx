import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

//App components
import Header from "./Header";
import Home from "./Home.jsx";
import Calculator from "./Calculator/Calculator";
import Result from "./Result";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header className="center" />
          <Route className="" path="/" exact component={Home} />
          <Route className="" path="/calculator" component={Calculator} />
          <Route className="" path="/result" component={Result} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
