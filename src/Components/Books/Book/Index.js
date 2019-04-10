import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Book.css";

class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <Link
        className="bookLink"
        to={`/book/${book.id}`}
      >
        <li className="bookCard"><p className="bookTittle">{book.tittle}</p><p>{book.resume}</p></li>
      </Link>

    );
  }
}


export default Book;
