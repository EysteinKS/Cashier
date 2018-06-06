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
        <div className="d-flex flex-column">
          <Header className="sticky-top" />
          <Route className="p2" path="/" exact component={Home} />
          <Route className="p2" path="/calculator" component={Calculator} />
          <Route className="p2" path="/result" component={Result} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
