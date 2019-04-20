import React from "react";
import ModalEditBook from '../ModalEditBook/Index';
import GenreList from "../GenreList/Index";

import Grid from '@material-ui/core/Grid';

import "./Book.css";

const Book = ({book, handleChangeEdit, deleteBook, handleDeleteGenre, handleAddGenre, genres}) => (
  <li key={book.id} className="bookCard">
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img className="imgBook" src={book.image} alt="Logo" />
          </Grid>
          <Grid item xs={10} className="bookRightContainer">

            <h1 className="bookTittle">{book.price}€ - {book.tittle}</h1>
            <p className="bookResume">{book.resume}</p>
            <GenreList
              selectBook={book}
              handleDeleteGenre={handleDeleteGenre}
              editOption={false}
            />           
            <ModalEditBook
              deleteBook={deleteBook}
              bookSelected={book}
              handleAddGenre={handleAddGenre}
              handleChangeEdit={handleChangeEdit}
              handleDeleteGenre={handleDeleteGenre}
              genres={genres}>
            </ModalEditBook>

          </Grid>

        </Grid>
      </li>
  );

export default Book;
