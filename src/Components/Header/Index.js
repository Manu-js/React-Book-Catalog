import React from 'react';
import "./Header.css";
import Menuoption from '../Menuoption';
import Logo from "../Logo/Index"

const Header = () => (

  <header className="appHeader">
    <Logo></Logo>
    <Menuoption url="/" characters="Books" />
    <Menuoption url="/config" characters="Configuration" />
  </header>
);

export default Header;
