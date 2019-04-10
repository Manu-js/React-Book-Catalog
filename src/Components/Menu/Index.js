
import React, { Component } from 'react';
import './Menu.css';
import Menuoption from '../Menuoption';

class Menu  extends Component {
  
  render() { 
    return (
    <div className="col-md-10">
        <nav className="menu">
          <ul className="">
              <Menuoption url="/" characters="books" />
              <Menuoption url="/edit" characters="genre" />
          </ul>
        </nav>
    </div>
    );
  }
}

export default Menu;