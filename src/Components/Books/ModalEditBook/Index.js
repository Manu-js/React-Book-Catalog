import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Genres from "../Genres/Index";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from '@material-ui/core/TextField';
import "./ModalEditBook.css";

class ModalEditBook extends Component {
  state = {
    open: false,
    visibleView: false
  };

  constructor(props) {
    super(props);

    this.onBookUpdate = this.onBookUpdate.bind(this);
    this.deleteThisBook = this.deleteThisBook.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.showNewGenre = this.showNewGenre.bind(this);
  }
  handleAddGenre(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      
      const { handleAddGenre, bookSelected } = this.props;
      handleAddGenre(
        event.target.value,
        bookSelected.id
      );
      this.hideNewGenre();
    }
  }

  onBookUpdate(e) {
    const { bookSelected, handleChangeEdit } = this.props;
    handleChangeEdit(e.currentTarget.name, bookSelected, e.currentTarget.value);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  showNewGenre() {
    this.setState({ visibleView: true });
  }
  hideNewGenre() {
    this.setState({ visibleView: false });
  }

  deleteThisBook() {
    const { deleteBook, bookSelected } = this.props;

    deleteBook(bookSelected.id);
  }
  render() {
    const { bookSelected, handleDeleteGenre } = this.props;
    return (
      <div className="modalBackground row">
        <div className="col-md-12">
        <h1 className="editTittle">Edit book</h1>
         <form className="container" noValidate autoComplete="off">
        <TextField
          id="tittle"
          label="Tittle"
          name="tittle"
          value={bookSelected.tittle}
          onChange={this.onBookUpdate}
          margin="normal"
          fullWidth
        />
        
         <TextField
          id="price"
          label="Price"
          name="price"
          value={bookSelected.price}
          onChange={this.onBookUpdate}
          margin="normal"
          fullWidth
        />
          <TextField
          id="resume"
          label="Resume"
          name="resume"
          value={bookSelected.resume}
          onChange={this.onBookUpdate}
          margin="normal"
          fullWidth
        />
        </form>
        </div>

        <Genres
          selectBook={bookSelected}
          handleDeleteGenre={handleDeleteGenre}
        />
        {this.state.visibleView === true ? (
                  <TextField
                  id="newGenre"
                  label="New genre"
                  name="newGenre"
                  onKeyDown={this.handleAddGenre}
                  margin="normal"
                />
        ) : (
          <Button onClick={this.showNewGenre}> + </Button>
        )}

        <Link className="" to={`/`}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.deleteThisBook}
            id={bookSelected.id}
          >
            Delete
            <DeleteIcon />
          </Button>
        </Link>
      </div>
    );
  }
}

export default ModalEditBook;
