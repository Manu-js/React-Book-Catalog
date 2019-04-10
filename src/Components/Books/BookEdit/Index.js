import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ModalEditBook from '../ModalEditBook/Index';

import "./Bookedit.css";

class BookEdit extends Component {
  state = {
    open: false,
    
  };
  componentDidMount() {

  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
};
  render() {
    const { match, books, deleteBook, handleChangeEdit } = this.props;
    const selectedId = match.params.id;
    const selectBook = books.find(
      book => book.id === selectedId
    );

    return (
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-4 tittleBook">{selectBook.tittle}</div>
          <Button onClick={this.handleOpen}>Open Modal</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <ModalEditBook bookSelected={selectBook} handleChangeEdit={handleChangeEdit}></ModalEditBook>
          </Modal>
        </div>
        <div className="row">
          <div className="col-md-12">{selectBook.resume}</div>
        </div>
        <div className="row">
          {selectBook.genres.map(item => (
            <React.Fragment key={item}>
              <div className="col-md-1 genreList">{item}</div>
            </React.Fragment>
          ))}
        </div>
        <button onClick={deleteBook} id={selectedId}>caca</button>
        <div className="app__character-detail col-md-10">
          <Link className="app__character-link" to={`/`}>
            <p>pa tras wey</p>
          </Link>
        </div>
      </div>
    );
  }
}


export default BookEdit;
