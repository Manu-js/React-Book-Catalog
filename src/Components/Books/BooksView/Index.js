import React from "react";
import ModalNewBook from '../ModalNewBook/Index';
import CheckGenreList from '../CheckGenreList/Index';
import BookList from '../BookList/Index';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./BooksView.css";

const Booklist = ({ isLoaded, 
  books, 
  genresFiltered,
  handleNewBook, 
  genres, 
  handleSelectGenre, 
  handleDeleteBook, 
  handleModifyBook, 
  handleDeleteGenre, 
  handleAddGenre }) => (
  <section>
    {isLoaded === true ? (
      <div>
        <CheckGenreList
          genresFiltered={genresFiltered}
          genres={genres}
          handleSelectGenre={handleSelectGenre}
        />
        <BookList
          books={books}
          handleAddGenre={handleAddGenre}
          handleDeleteBook={handleDeleteBook}
          handleModifyBook={handleModifyBook}
          handleDeleteGenre={handleDeleteGenre}
          genres={genres} 
        />
        <ModalNewBook
          handleNewBook={handleNewBook}
          handleDeleteGenre={handleDeleteGenre} />
      </div>
    ) : (
        <CircularProgress
          className="loadDataSpiner"
          color="secondary"
        />
      )}
  </section>
);

export default Booklist;
