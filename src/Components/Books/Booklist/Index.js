import React, { Component } from "react";
import "./Booklist.css";
import Book from '../Book/Index'


class Booklist extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="col-md-12">
        <ul>
          {books.map(function (book, i) {
            return <Book key={book.id} book={book} />
          })}
        </ul>
      </div>
    );
  }
}



export default Booklist;
