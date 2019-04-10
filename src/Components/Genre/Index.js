import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Genre.css";

class Genre extends Component {
  render() {
    const { book } = this.props;

    return (
      <Link
        className="app__character-link"
        to={`/Genre/${book.id}`}
        key={book.id}
      >
        <li className="bookCard"><p>{book.tittle}</p><p>{book.resume}</p></li>
      </Link>

    );
  }
}


export default Genre;
