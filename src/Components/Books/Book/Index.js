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
        <li className="bookCard">
         <img src={book.image} alt="Logo" />
          <p className="bookTittle">{book.tittle}</p>
        </li>
      </Link>

    );
  }
}


export default Book;
