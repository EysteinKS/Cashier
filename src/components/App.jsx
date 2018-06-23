import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//App components
import Header from "./Header";
import Footer from "./Footer";
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
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

/*
Todo:
Home
Result
*/

/* Check https://medium.freecodecamp.org/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00 */

export default App;
