import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ModalEditBook from '../ModalEditBook/Index';
import Genres from '../Genres/Index';

import "./Bookedit.css";

class BookEdit extends Component {
  state = {
    open: false,
    visibleView:false,
  };

  constructor(props) {
		super(props);

    this.deleteThisBook = this.deleteThisBook.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.showNewGenre = this.showNewGenre.bind(this);

  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  showNewGenre(){
    this.setState({ visibleView: true });   
  }
  hideNewGenre(){
    this.setState({ visibleView: false });   
  }
  deleteThisBook(){
    const { deleteBook, match} = this.props;

    deleteBook(match.params.id);
  }

  handleAddGenre(e){
    if (e.key == "Enter") {
      e.preventDefault();
      e.stopPropagation();
    const {handleAddGenre, match} = this.props;
    const selectedId = match.params.id;
    const selectBook = this.findSelectedBook(selectedId);
    selectBook.genres.push(e.currentTarget.value);

    handleAddGenre(selectBook.genres, selectedId);
    this.hideNewGenre()
    }
  }  

  findSelectedBook(idBook){
    const { books} = this.props;
    return books.find(
      book => book.id === parseInt(idBook)
    );
  }

  render() {
    const { match, handleChangeEdit, handleDeleteGenre} = this.props;
    const selectedId = match.params.id;
    const selectBook = this.findSelectedBook(selectedId);
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
          <Genres match={match} selectBook={selectBook} handleDeleteGenre={handleDeleteGenre}></Genres>
          {
          this.state.visibleView === true ? <input type="text" onKeyDown={this.handleAddGenre} /> :  <Button onClick={this.showNewGenre}> + </Button>
           }
          
        </div>
        <Link className="" to={`/`}>
          <Button onClick={this.deleteThisBook} id={selectedId}>Delete</Button>
        </Link>
        <Link className="" to={`/`}>
          <Button onClick={this.deleteThisBook} id={selectedId}>actualizar genero</Button>
        </Link>
      </div>
    );
  }
}


export default BookEdit;
