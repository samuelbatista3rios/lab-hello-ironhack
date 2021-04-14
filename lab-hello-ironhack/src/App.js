
import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Elements from "./Elements";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Elements/>
      </div>
    );
  }
}

export default App;