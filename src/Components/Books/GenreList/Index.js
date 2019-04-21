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
      <div className="genreListWrap">
        <span className="listGenreTittle">List of genres: </span>
        <ul className="genreList">
          {selectBook.genres.map(item => (
            editOption === true ? (
              <li
                id={item}
                key={item}
                value={item}
                className="genreListObject">
                {item}
                <CloseIcon id={item} style={{ fontSize: 15 }} className="closeButton" onClick={this.handleDeleteGenre} />
              </li>
            ) : (
                <li
                  id={item}
                  key={item}
                  value={item}
                  className="genreListObject">{item}
                </li>
              )
          ))}
        </ul>
      </div>
    );
  }
}

export default GenreList;
