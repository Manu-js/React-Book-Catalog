import React, { Component } from "react";


import "./Genres.css";

class BookEdit extends Component {
    constructor(props) {
		super(props);

    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);


  }
    handleDeleteGenre(e){
        const { handleDeleteGenre, selectBook} = this.props;
        var arrayAux = [];
         selectBook.genres.map((genre, index) => {
          if (genre !== e.target.id){
            arrayAux.push(genre);
          }
          return selectBook;
        })
        handleDeleteGenre(selectBook.id, arrayAux);
      }
  render() {
    const { selectBook} = this.props;
    return (
        <ul>
        {selectBook.genres.map(item => (
            <li onClick={this.handleDeleteGenre} id={item} key={item} className="genreList">{item}</li>
        ))}
        </ul>
    );
  }
}


export default BookEdit;
