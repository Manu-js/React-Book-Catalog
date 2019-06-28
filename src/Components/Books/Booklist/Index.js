import React from "react";
import Book from '../Book/Index'
import "./Booklist.css";

const CheckList = ({books, 
  genres, 
  handleAddGenre,
  handleDeleteBook,
  handleModifyBook,
  handleDeleteGenre }) => (
  <section>
    <ul>
      {books.map(function (book) {
        return <Book
          key={book.id}
          book={book}
          handleAddGenre={handleAddGenre}
          handleDeleteBook={handleDeleteBook}
          handleModifyBook={handleModifyBook}
          handleDeleteGenre={handleDeleteGenre}
          genres={genres}
        />
      })}
    </ul>
  </section>
);

export default CheckList;
