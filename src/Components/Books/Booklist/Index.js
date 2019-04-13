import React, { Component } from "react";
import "./Booklist.css";
import Book from '../Book/Index'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import NewBook from '../NewBook/Index';

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
    const { books, handleNewBook } = this.props;
    return (
      <div className="col-md-12">
        <ul>
          {books.map(function (book, i) {
            return <Book key={book.id} book={book} />
          })}
        </ul>
        <Button variant="contained" color="primary" className="addButton" onClick={this.handleOpen}>New book</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.openModal}
            onClose={this.handleClose}
          >
            <NewBook handleNewBook={handleNewBook}></NewBook>
          </Modal>
      </div>
    );
  }
}



export default Booklist;
