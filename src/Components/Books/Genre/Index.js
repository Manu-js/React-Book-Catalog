import React, { Component } from "react";
import "./Genre.css";

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

    return (
      <p className="auxName">
        <input type="checkbox" 
          value={genre}
          onChange={this.checkGenre} 
          defaultChecked={this.state.checked}
          checked={genresFiltered.indexOf(genre) > -1}

          />
          
        <span>{genre}</span>
      </p>
    );
  }
}


export default GenreCheckBox;
