import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ModalEditBook from '../ModalEditBook/Index';

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
    const { book, handleChangeEdit, deleteBook, handleDeleteGenre, handleAddGenre} = this.props;

    return (
      // <Link
      //   className="bookLink"
      //   to={`/book/${book.id}`}
      // >
        <li className="bookCard">
         <img src={book.image} alt="Logo" />
          <p className="bookTittle">{book.tittle}</p>
          <Button onClick={this.handleOpen}>Open Modal</Button>
          <Modal
            header="Modal Header"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <ModalEditBook deleteBook={deleteBook} bookSelected={book} handleAddGenre={handleAddGenre} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre}></ModalEditBook>
          </Modal>
        </li>
      // </Link>


    );
  }
}


export default Book;
