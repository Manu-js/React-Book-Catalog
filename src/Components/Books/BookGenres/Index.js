import React, { Component } from "react";

import "./BookGenres.css";

class BookGenres extends Component {
  state = {
    visibleView: false

  };
  constructor(props) {
    super(props);

    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.showNewGenre = this.showNewGenre.bind(this);
  }

  handleAddGenre(event) {
    const { handleAddGenre, selectBook } = this.props;

    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();

      handleAddGenre(
        event.target.value,
        selectBook.id
      );
      this.hideNewGenre();
    }
  }
  showNewGenre() {
    this.setState({ visibleView: true });
  }
  hideNewGenre() {
    this.setState({ visibleView: false });
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


export default BookGenres;
