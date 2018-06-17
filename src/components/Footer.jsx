import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return(
     <footer className="footer">
       <p>Copyright {(new Date().getFullYear())} Eystein</p>   
     </footer>
    );
  }
}

export default Footer;