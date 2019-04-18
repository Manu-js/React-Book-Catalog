import React, { Component } from "react";
import ModalEditBook1 from '../ModalEditBook1/Index';
import Grid from '@material-ui/core/Grid';

import "./Book.css";

class Book extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { book, handleChangeEdit, deleteBook, handleDeleteGenre, handleAddGenre } = this.props;

    return (
      <li className="bookCard">
        <Grid container spacing={24}>
          <Grid item xs={2}>

            <img className="imgBook"  alt="Logo" />
          </Grid>
          <Grid item xs={10} className="bookRightContainer">

            <h1 className="bookTittle">{book.tittle}</h1>
            <p className="bookResume">{book.resume}</p>
            <ModalEditBook1 deleteBook={deleteBook} bookSelected={book} handleAddGenre={handleAddGenre} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre}></ModalEditBook1>
          </Grid>

        </Grid>
      </li>


    );
  }
}


export default Book;
