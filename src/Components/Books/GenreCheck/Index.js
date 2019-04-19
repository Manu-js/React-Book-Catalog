import React, { Component } from "react";
import "./GenreCheck.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class GenreCheck extends Component {
  state = {
    checked: false
  }
  constructor(props) {
    super(props);
    this.checkGenre = this.checkGenre.bind(this);
  }

  checkGenre(e) {
    const { handleSelectGenre } = this.props;
    this.setState({ checked: !this.state.checked });
    handleSelectGenre(e.currentTarget)
  }

  render() {
    const { genre, genresFiltered } = this.props;

    return (

      <FormControlLabel
        control={
          <Checkbox
            checked={genresFiltered.indexOf(genre) > -1}
            onChange={this.checkGenre}
            value={genre}
            color="primary"
          />
        }
        label={genre}
      />

    );
  }
}


export default GenreCheck;