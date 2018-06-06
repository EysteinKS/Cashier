import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="">
        <div className="header">
          <p className="display-2 minus-bottom">Oppgjør</p>
          <ul className="inline-list">
            <li className="">
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="calculator">
                Calculator
              </NavLink>
            </li>
            <li className="">
              <NavLink className="" to="result">
                Result
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
