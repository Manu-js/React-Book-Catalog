import React, { Component } from "react";
import "./Booklist.css";
import Book from '../Book/Index'
import NewBookModal from '../NewBookModal/Index';
import GenreCheckBox from '../Genre/Index';

class Booklist extends Component {

  render() {
    const { books,genresFiltered, handleNewBook, genres, handleSelectGenre, deleteBook, handleChangeEdit, handleDeleteGenre, handleAddGenre } = this.props;
    return (
      <section> 
        <ul >
            {genres.map(function (genre, i) {
              return <li className="listGenres"><GenreCheckBox key={genre} genresFiltered={genresFiltered} handleSelectGenre={handleSelectGenre} genre={genre}></GenreCheckBox></li>
            })}
        </ul>
        <ul>
          {books.map(function (book, i) {
            return <Book key={book.id} book={book} handleAddGenre={handleAddGenre} deleteBook={deleteBook} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre}  />
          })}
        </ul>
        <NewBookModal handleNewBook={handleNewBook}></NewBookModal>
      </section>
    );
  }
}



export default Booklist;
