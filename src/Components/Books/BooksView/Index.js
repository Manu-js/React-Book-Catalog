import React from "react";
import "./BooksView.css";
import ModalNewBook from '../ModalNewBook/Index';
import CheckList from '../CheckList/Index';
import BookList from '../BookList/Index';
import CircularProgress from '@material-ui/core/CircularProgress';
const Booklist = ({ isLoaded ,books, newBookData, addNewBookParam, genresFiltered, handleNewBook, genres, handleSelectGenre, deleteBook, handleChangeEdit, handleDeleteGenre, handleAddGenre }) => (

  <section>
   {isLoaded === true ? (
     <div>
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
      handleDeleteGenre={handleDeleteGenre} />
      </div>
    ) : (
      <CircularProgress className="loadDataSpiner"  color="secondary" />
     )}
    
  </section>
);

export default Booklist;
