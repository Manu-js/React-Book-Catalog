import React from "react";
import "./Menuoption.css";
import { Link } from 'react-router-dom';

const Menuoption = ({ characters, url }) => {
    return (
        <Link to={url} className="menuItem">
            {characters}
        </Link>
    );
}

export default Menuoption;
