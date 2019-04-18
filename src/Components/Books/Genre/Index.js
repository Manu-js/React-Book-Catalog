import React, { Component } from "react";
import "./Genre.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: "#3F51B5" ,
    '&$checked': {
      color: "#3F51B5",
    },
  },
  checked: {},
};

class GenreCheckBox extends Component {
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
    const { classes } = this.props;

    return (
            
      <FormControlLabel
      control={
        <Checkbox
          checked={genresFiltered.indexOf(genre) > -1}
          onChange={this.checkGenre}
          value={genre}
          color="primary"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      }
      label={genre}
    />

    );
  }
}


export default withStyles(styles)(GenreCheckBox);
