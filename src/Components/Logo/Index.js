import React, { Component } from "react";
import "./Main.css";
import imagen from "../../img/logo.png"

class Logo extends Component {
  render() {
    return (
      <img src={imagen} alt="logo" className="logo"></img>
    );
  }
};
export default Logo;
