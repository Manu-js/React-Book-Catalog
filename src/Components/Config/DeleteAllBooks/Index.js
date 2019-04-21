import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import './DeleteAllBooks.css';

class DeleteAllBooks extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllBook = this.handleDeleteAllBook.bind(this);
  }
  state = {
    open: false,
    visibleView: false
  };
  handleDeleteAllBook() {
    const { handleDeleteAllBook } = this.props;
    handleDeleteAllBook();
    this.handleClose();
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="deleteAllWrap">
        <span>Delete all boks: </span>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          <span>Delete</span> <EditIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete all books</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your books will be permanently deleted. You won't be able to retrieve anything you've added.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleDeleteAllBook}
              variant="contained"
              color="secondary">
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeleteAllBooks;