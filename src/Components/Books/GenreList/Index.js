import React, { Component } from "react";

import "./GenreList.css";

class GenreList extends Component {
  state = {
    visibleView: false

  };
  constructor(props) {
    super(props);

    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
  }

  handleDeleteGenre(e) {
    const { handleDeleteGenre, selectBook } = this.props;
    var arrayAux = [];
    selectBook.genres.map((genre, index) => {
      if (genre !== e.target.id) {
        arrayAux.push(genre);
      }
      return selectBook;
    })
    handleDeleteGenre(selectBook.id, arrayAux);
  }
  render() {
    const { selectBook,editOption } = this.props;
    return (
      <ul className="genreListWrap">
        {selectBook.genres.map(item => (
          editOption === true ? (
          <li
            onClick={this.handleDeleteGenre}
            id={item}
            key={item}
            className="genreList">{item}
          </li>
          ):(
            <li
            id={item}
            key={item}
            className="genreList">{item}
          </li>
          )
        ))}
      </ul>
    );
  }
}


export default GenreList;
