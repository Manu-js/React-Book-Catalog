import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddGenre extends Component {
  state = {
    visibleView: false

  };
  constructor(props) {
    super(props);

    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.showNewGenre = this.showNewGenre.bind(this);
  }

  handleAddGenre(event) {
    const { handleAddGenre, selectBook } = this.props;
    
    if (event.key === "Enter") {
      if( this.isGenreExist(event.target.value) === -1){

      event.preventDefault();
      event.stopPropagation();

      handleAddGenre(
        event.target.value,
        selectBook.id
      );
      } 
      this.hideNewGenre();

    }
  }
  isGenreExist(inputGenre){
    const { selectBook } = this.props;
    return selectBook.genres.indexOf(inputGenre);

  }
  showNewGenre() {
    this.setState({ visibleView: true });
  }
  hideNewGenre() {
    this.setState({ visibleView: false });
  }


  render() {
    return (
      <ul>
        <li className="genreAddList">
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
        </li>
      </ul>
    );
  }
}


export default AddGenre;
