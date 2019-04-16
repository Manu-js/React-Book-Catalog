import React, { Component } from "react";
import "./Booklist.css";
import Book from '../Book/Index'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import NewBook from '../NewBook/Index';
import GenreCheckBox from '../Genre/Index';

class Booklist extends Component {

  state = {
    openModal: false,

  };
  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { books,genresFiltered, handleNewBook, genres, handleSelectGenre, deleteBook, handleChangeEdit, handleDeleteGenre, handleAddGenre } = this.props;
    return (
      <div className="row"> 
        <div className="col-md-12">
        <ul>
            {genres.map(function (genre, i) {
              return <GenreCheckBox genresFiltered={genresFiltered} handleSelectGenre={handleSelectGenre} genre={genre}></GenreCheckBox>
            })}
        </ul>
        </div>
        <div className="col-md-12">
          <ul>
            {books.map(function (book, i) {
              return <Book key={book.id} book={book} handleAddGenre={handleAddGenre} deleteBook={deleteBook} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre}  />
            })}
          </ul>
          <Button variant="contained" color="primary" className="addButton" onClick={this.handleOpen}>New book</Button>
          <Modal
            header="Modal Header"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.openModal}
            onClose={this.handleClose}
          >
            <NewBook handleNewBook={handleNewBook}></NewBook>
          </Modal>
        </div>
      </div>
    );
  }
}



export default Booklist;
