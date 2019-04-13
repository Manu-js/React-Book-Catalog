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

  constructor(props) {
		super(props);

		this.deleteThisBook = this.deleteThisBook.bind(this);
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  deleteThisBook(){
    const { deleteBook, match} = this.props;

    deleteBook(match.params.id);
  }
  render() {
    const { match, books, handleChangeEdit } = this.props;
    const selectedId = match.params.id;
    const selectBook = books.find(
      book => book.id === parseInt(selectedId)
    );

    return (
      <div className="col-md-10">
        <div className="row">
          <Link className="" to={`/`}>
            <button>Back</button>
          </Link>
        </div>
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
          <div className="col-md-12">
            <p className="genreListTittle">Generos</p>
          </div>

          {selectBook.genres.map(item => (
            <React.Fragment key={item}>
              <div className="genreList">{item}</div>
            </React.Fragment>
          ))}
        </div>
        <Link className="" to={`/`}>
          <Button onClick={this.deleteThisBook} id={selectedId}>Delete</Button>
        </Link>
      </div>
    );
  }
}


export default BookEdit;
