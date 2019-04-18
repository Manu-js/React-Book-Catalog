import React, { Component } from 'react';
import "./Header.css";
import Menuoption from '../Menuoption';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "../Logo/Index"

class Header extends Component {
  render() {
    return (
      <header className="app__header">

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" >
              <Logo></Logo>
            </Typography>
            <MenuItem>
              <Menuoption url="/" characters="books" />
            </MenuItem>
            <MenuItem>
              <Menuoption url="/config" characters="Configuracion" />
            </MenuItem>

          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default Header;
