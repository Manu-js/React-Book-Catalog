import React from "react";
import "./Menuoption.css";
import { Link } from 'react-router-dom';

const Menuoption = ({ characters, url }) => {
    return (
        <Link to={url} className="menu__link">

        <li className="menuItem">               
         {characters}
        </li>
        </Link>
    );
}

export default Menuoption;
