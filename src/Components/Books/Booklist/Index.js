import React, { Component } from "react";
import "./Booklist.css";
import Book from '../Book/Index'
import ModalNewBook from '../ModalNewBook/Index';
import GenreCheck from '../GenreCheck/Index';

class Booklist extends Component {

  render() {
    const { books, genresFiltered, handleNewBook, genres, handleSelectGenre, deleteBook, handleChangeEdit, handleDeleteGenre, handleAddGenre } = this.props;
    return (
      <section>
        <ul >
          {genres.map(function (genre) {
            return <li
              key={genre}
              className="listGenres">
              <GenreCheck
                key={genre}
                genresFiltered={genresFiltered}
                handleSelectGenre={handleSelectGenre}
                genre={genre}>
              </GenreCheck>
            </li>
          })}
        </ul>
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
        <ModalNewBook
          handleNewBook={handleNewBook}>
        </ModalNewBook>
      </section>
    );
  }
}



export default Booklist;
