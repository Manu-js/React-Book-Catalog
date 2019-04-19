import React, { Component } from 'react';
import "./Header.css";
import Menuoption from '../Menuoption';
import Logo from "../Logo/Index"

class Header extends Component {
  render() {
    return (
      <header className="appHeader">
        <Logo></Logo>
        <Menuoption url="/" characters="Books" />
        <Menuoption url="/config" characters="Configuration" />
      </header>
    );
  }
}

export default Header;
