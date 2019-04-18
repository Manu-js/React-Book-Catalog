
import React, { Component } from 'react';
import './Menu.css';
import Menuoption from '../Menuoption';

class Menu  extends Component {
  
  render() { 
    return (
    <div>
        <nav className="menu">
          <ul className="">
              <Menuoption url="/" characters="books" />
              <Menuoption url="/config" characters="Configuracion" />
          </ul>
        </nav>
    </div>
    );
  }
}

export default Menu;