import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import "./ModalNewBook.css";


class ModalNewBook extends Component {

  constructor(props) {
    super(props);
    this.handleBookAdd = this.handleBookAdd.bind(this);
    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);

  }
  state = {
    open: false,
    tittleValue: '',
    resumeValue: '',
    priceValue: '',
    genresValue: [],
    inputValue: ''

  };
  handleBookAdd(e) {
    const { handleNewBook } = this.props;
    handleNewBook(this.state.tittleValue, this.state.resumeValue, this.state.priceValue, this.state.genresValue);
    this.handleClose();
  }
  handleDeleteGenre(e) {
    const { genresValue } = this.state;
    this.setState({ genresValue: genresValue.filter(i => i !== e.target.id) });
  }
  onChange = (e) => this.setState({ inputValue: e.target.value });

  onClick = () => {
    const { inputValue, genresValue } = this.state;
    if (inputValue) {
      const nextState = [...genresValue, inputValue];
      this.setState({ genresValue: nextState, inputValue: '' });
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { inputValue } = this.state;

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
              id="tittleValue"
              label="Tittle"
              name="tittleValue"
              value={this.state.tittleValue}
              onChange={evt => this.updateInputValue(evt)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="priceValue"
              label="Price"
              name="priceValue"
              value={this.state.priceValue}
              onChange={evt => this.updateInputValue(evt)}
              margin="normal"
              fullWidth
            />
            <TextField
              id="resumeValue"
              label="Resume"
              name="resumeValue"
              value={this.state.resumeValue}
              onChange={evt => this.updateInputValue(evt)}
              margin="normal"
              fullWidth
            />
            <ul className="genreListWrap">
              {this.state.genresValue.map(item => (
                <li
                  onClick={this.handleDeleteGenre}
                  id={item}
                  key={item}
                  className="genreList">{item}
                </li>
              ))}

            </ul>
            <Input type="text" id="inputValue" name="inputValue" value={inputValue} onChange={this.onChange} />
            <Button onClick={this.onClick}>Add</Button>
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