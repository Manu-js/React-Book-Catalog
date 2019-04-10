import React from "react";
import "./Header.css";
import Menu from "../Menu/Index";
import Logo from "../Logo/Index";

function Header(props) {
  return (
    <header>
      <div className="row">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
