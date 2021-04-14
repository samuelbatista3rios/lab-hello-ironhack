import React, { Component } from "react";
import "./App.css";


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src="/images/ironhack-logo.svg"></img>
        <h1>Say Hello To ReactJS</h1>        
        <p>You will learn a frontend framework from scratch</p>  
        <button>Awesome</button>      
      </div>
    );
  }
}

export default Header;