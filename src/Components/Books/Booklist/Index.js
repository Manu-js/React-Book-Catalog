import React from "react";
import "./BookList.css";
import Book from '../Book/Index'

const CheckList = ({books, genres, handleAddGenre,deleteBook,handleChangeEdit,handleDeleteGenre }) => (

  <section>
    <ul>
      {books.map(function (book) {
        return <Book
          key={book.id}
          book={book}
          handleAddGenre={handleAddGenre}
          deleteBook={deleteBook}
          handleChangeEdit={handleChangeEdit}
          handleDeleteGenre={handleDeleteGenre}
          genres={genres}
        />
      })}
    </ul>
  </section>
);

export default CheckList;
