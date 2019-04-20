import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import GenreList from "../GenreList/Index";
import AddGenre from "../AddGenre/Index";

import "./ModalNewBook.css";


class ModalNewBook extends Component {

  constructor(props) {
    super(props);
    this.handleBookAdd = this.handleBookAdd.bind(this);
    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
    this.handleAddNewGenre = this.handleAddNewGenre.bind(this);

  }
  state = {
    open: false,
    genresValue: [],
    inputValue: '',
    newBookData: {
      tittle: '',
      resume: '',
      price: '',
      genres: [],
      image: ''
    },

  };
  handleBookAdd(e) {
    const { handleNewBook } = this.props;
    const { newBookData } = this.state
    handleNewBook(newBookData);
    this.handleClose();
  }

  onChange = (e) => this.setState({ inputValue: e.target.value });


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleAddNewGenre(text) {
    this.setState(prevState => {
      const newState = {
        newBookData: {
          ...prevState.newBookData,
          genres: prevState.newBookData.genres.concat(text)
        }
        //genres: this.isGenreExist(genre) === -1 ? (prevState.genres.concat(genre)) : (prevState.genres),

      }
      return newState;
    })
  }
  handleDeleteGenre(idBook, genre) {

    this.setState(prevState => {
      const newState = {
        newBookData: {
          ...prevState.newBookData,
          genres: genre
        }
        //genres: this.isGenreExist(genre) === -1 ? (prevState.genres.concat(genre)) : (prevState.genres),

      }
      return newState;
    })
  }
  updateInputValue(e) {
    const { newBookData } = this.state;
    this.setState({
      newBookData: {
        ...newBookData,
        [e.target.name]: e.target.value
      }
    });
  }
  render() {

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className="addButton"
          onClick={this.handleClickOpen}>
          Add book<AddIcon />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new book</DialogTitle>
          <DialogContent>
            <TextField
              id="tittle"
              label="Tittle"
              name="tittle"
              value={this.state.newBookData.tittle}
              onChange={evt => this.updateInputValue(evt)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="price"
              label="Price"
              name="price"
              value={this.state.newBookData.value}
              onChange={evt => this.updateInputValue(evt)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="resume"
              label="Resume"
              name="resume"
              value={this.state.newBookData.resume}
              onChange={evt => this.updateInputValue(evt)}
              margin="normal"
              fullWidth
            />

            <GenreList
              selectBook={this.state.newBookData}
              handleAddGenre={this.handleAddNewGenre}
              handleDeleteGenre={this.handleDeleteGenre}
              editOption={true}
            />
            <AddGenre
              selectBook={this.state.newBookData}
              handleAddGenre={this.handleAddNewGenre}

              genres={this.state.newBookData.genres}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" onClick={this.handleClose} >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={this.handleBookAdd}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default ModalNewBook;