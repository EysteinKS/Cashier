import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <div className="d-flex flex-column mx-auto sticky-top">
                <div className="justify-content-center">
                    <p className="display-2 p-2">Oppgjør</p> <br/>
                    <ul className="nav p-2">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="calculator">Calculator</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="result">Result</NavLink></li>
                    </ul>
                </div>    
            </div>
        );
    }
}

export default Header;