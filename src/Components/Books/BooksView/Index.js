import React from "react";
import "./BooksView.css";
import ModalNewBook from '../ModalNewBook/Index';
import CheckList from '../CheckList/Index';
import BookList from '../BookList/Index';

const Booklist = ({ books, newBookData, addNewBookParam, genresFiltered, handleNewBook, genres, handleSelectGenre, deleteBook, handleChangeEdit, handleDeleteGenre, handleAddGenre }) => (

  <section>
    <CheckList 
      genresFiltered={genresFiltered} 
      genres={genres} 
      handleSelectGenre={handleSelectGenre} />
      
    <BookList
      books={books}
      handleAddGenre={handleAddGenre}
      deleteBook={deleteBook}
      handleChangeEdit={handleChangeEdit}
      handleDeleteGenre={handleDeleteGenre}
      genres={genres} />

    <ModalNewBook
      handleNewBook={handleNewBook}
      addNewBookParam={addNewBookParam}
      newBookData={newBookData}
      handleDeleteGenre={handleDeleteGenre} />
  </section>
);

export default Booklist;
