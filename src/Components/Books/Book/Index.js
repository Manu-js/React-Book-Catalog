import React, { Component } from "react";
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
    const { book, handleChangeEdit, deleteBook, handleDeleteGenre, handleAddGenre } = this.props;

    return (
      <li className="bookCard">
        <div className="row">
          <div className="col-md-5">
            <img className="imgBook" src={book.image} alt="Logo" />
          </div>
          <div className="col-md-7">
            <h1 className="bookTittle">{book.tittle}</h1>
            <p className="bookResume">{book.resume}</p>
            <Button variant="outlined" color="primary" onClick={this.handleOpen}>Editar</Button>
            <Modal
              header="Modal Header"
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <ModalEditBook deleteBook={deleteBook} bookSelected={book} handleAddGenre={handleAddGenre} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre}></ModalEditBook>
            </Modal>
          </div>
        </div>
      </li>
      // </Link>


    );
  }
}


export default Book;
