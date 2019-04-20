import React, { Component } from "react";
import CloseIcon from '@material-ui/icons/Close';
import "./GenreList.css";

class GenreList extends Component {

  constructor(props) {
    super(props);

    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
  }

  handleDeleteGenre(e) {
    const { handleDeleteGenre, selectBook } = this.props;
    let arrayAux = [];
    selectBook.genres.map((genre, index) => {
      if (genre !== e.target.id) {
        arrayAux.push(genre);
      }
      return selectBook;
    })
    handleDeleteGenre(selectBook.id, arrayAux);
  }
  render() {

    const { selectBook, editOption } = this.props;
    return (
      <ul className="genreListWrap">
      <span>Genres list: </span>
        {selectBook.genres.map(item => (
          editOption === true ? (
            <li
              id={item}
              key={item}
              value={item}
              className="genreList">
              {item} 
              <CloseIcon id={item} style={{ fontSize: 15 }} className="closeButton" onClick={this.handleDeleteGenre} />
            </li>
          ) : (
              <li
                id={item}
                key={item}
                value={item}

                className="genreList">{item}
              </li>
            )
        ))}
      </ul>
    );
  }
}


export default GenreList;
