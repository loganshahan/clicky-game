import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         
          <div className="slogan">Test Your Sunny Memory</div>
          <div className="scores">Score: {this.props.score} Highscore: {this.props.highscore}</div>
        
      </nav>
    );
  }
}

export default Navbar;