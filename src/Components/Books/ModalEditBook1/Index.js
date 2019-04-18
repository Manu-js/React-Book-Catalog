import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import "./NewBookModal1.css";
import Genres from "../Genres/Index";


export default class FormDialog extends React.Component {
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
    const { bookSelected, handleDeleteGenre,handleAddGenre} = this.props;

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
            <DialogContentText>
              Añade las caracteristicas del libro en esta seccion
            </DialogContentText>
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

          <Genres
          selectBook={bookSelected}
          handleDeleteGenre={handleDeleteGenre}
          handleAddGenre={handleAddGenre}
        />

          </DialogContent>
          <DialogActions>
            <Button  variant="contained"
            color="secondary"
            onClick={this.deleteThisBook}
            id={bookSelected.id}>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Actualizar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
