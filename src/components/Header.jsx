import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <div className="">
        <div className="header">
          <p className="display-2 minus-bottom">Oppgjør</p>
          <ul className="inline-list">
            <li className="">
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink className="link" to="calculator">
                Calculator
              </NavLink>
            </li>
            <li className="">
              <NavLink className="link" to="result">
                Result
              </NavLink>
            </li>
          </ul>
          <Navigation/>
        </div>
      </div>
    );
  }
}

export default Header;
