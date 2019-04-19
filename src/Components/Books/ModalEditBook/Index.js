import React, { Component } from "react";

import BookGenres from "../BookGenres/Index";
import AddGenre from "../AddGenre/Index";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import "./ModalEditBook.css";

class ModalEditBook extends Component {
  constructor(props) {
    super(props);

    this.onBookUpdate = this.onBookUpdate.bind(this);
    this.deleteThisBook = this.deleteThisBook.bind(this);
  }
  state = {
    open: false,
    visibleView: false
  };

  deleteThisBook() {
    const { deleteBook, bookSelected } = this.props;
    deleteBook(bookSelected.id);
  }

  onBookUpdate(e) {
    const { bookSelected, handleChangeEdit } = this.props;
    handleChangeEdit(e.currentTarget.name, bookSelected, e.currentTarget.value);
  }

  handleClickOpen = () => {
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

  render() {
    const { bookSelected, handleDeleteGenre, handleAddGenre, genres } = this.props;

    return (
      <div className="editButton">
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          <EditIcon />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Modify Book</DialogTitle>
          <DialogContent>
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

            <BookGenres
              selectBook={bookSelected}
              handleDeleteGenre={handleDeleteGenre}
              handleAddGenre={handleAddGenre}
              editOption={true}

            />
            <AddGenre 
              handleAddGenre={handleAddGenre}
              selectBook={bookSelected}
              genres={genres}
            />
          </DialogContent>
          <DialogActions>
          <Button
              variant="contained"
              onClick={this.handleClose}
              id={bookSelected.id}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.deleteThisBook}
              id={bookSelected.id}>
              Delete Book
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClose}>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default ModalEditBook;
