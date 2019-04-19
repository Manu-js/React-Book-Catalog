import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header/Index.js';
import Main from "./Components/Main/Index.js";
import { booksJson } from "./Services/ApiBook";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: booksJson,
      genres: [],
      genresFiltered: []
    };

    this.deleteBook = this.deleteBook.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleNewBook = this.handleNewBook.bind(this);
    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.handleSelectGenre = this.handleSelectGenre.bind(this);
    this.deleteAllBook = this.deleteAllBook.bind(this);
  }

  getGenres() {
    const auxArray = [];
    booksJson.map((item, i) => {
      return item.genres.map((item, i) => {
        if (auxArray.indexOf(item) === -1) {
          auxArray.push(item);
        }
        return auxArray;
      });
    })
    this.setState(prevState => ({
      genres: auxArray
    }));
  }

  handleSelectGenre(e) {
    const { checked, value } = e;
    this.setState(prevState => {

      let auxArray = prevState.genresFiltered;
      if (!checked) {
        var index = auxArray.indexOf(value)
        if (index !== -1) {
          auxArray.splice(index, 1);
        }
      } else {
        auxArray.push(value)
      }
      this.setState(prevState => ({
        genresFiltered: auxArray
      }));

    })

  }
  getBookList() {
    const { books, genresFiltered } = this.state;
    let auxVar = []
    for (const book of books) {
      const found = book.genres.some(r => genresFiltered.indexOf(r) >= 0)

      if (found === true) {
        auxVar.push(book)
      }
    }

    if (auxVar.length !== 0) {
      return auxVar;
    } else {
      return books;
    }
  }

  deleteAllBook() {
    this.setState({ books: [] });
  }

  // deleteAllBook(){
  //   this.setState(prevState => {
  //     const newState = {
  //       books: [],
  //       genres:[],
  //       genresFiltered:[]
  //     }
  //     return newState;
  //   })
  // }


  handleChangeEdit(name, bookSelected, value) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {

          if (book.id === bookSelected.id) {
            book = {
              ...book,
              [name]: value
            }
          }
          return book;
        })
      }
      return newState;
    })

  }

  handleAddGenre(genre, idBook) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {
          if (book.id === idBook) {
            book = {
              ...book,
              genres: book.genres.concat(genre)
            }
          }
          return book;
        }),
        genres: this.isGenreExist(genre) === -1 ? (prevState.genres.concat(genre)) : (prevState.genres),

      }
      return newState;
    })

  }

  isGenreExist(inputGenre){
    const genres = this.state.genres;
    return genres.indexOf(inputGenre);

  }
  
  handleNewBook(newTittle, newResume, newPrice) {
    const newId = (this.state.books[this.state.books.length -1].id) + 1;
    const newBook = {
      "tittle": newTittle,
      "resume": newResume,
      "price": newPrice,
      "genres": ["drama", "suspense"],
      "image": "http://hp-api.herokuapp.com/images/harry.jpg",
      "id": newId, // corregir esto. Esto hace que puedas tener dos ID. Necesito coger la ultima id y sumar una mas
    };
    this.setState(prevState => ({
      books: [...prevState.books, newBook]
    }));
  }

  handleDeleteGenre(idBook, genre) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {
          if (book.id === idBook) {
            book = {
              ...book,
              genres: genre
            }
          }
          return book;
        })
      }
      return newState;
    })
  }

  deleteBook(idBook) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.filter(book => book.id !== parseInt(idBook))
      }
      return newState;
    });
  }


  componentDidMount() {
    this.getGenres();

  }

  render() {
    const { genres, genresFiltered } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          books={this.getBookList()}
          genres={genres}
          genresFiltered={genresFiltered}
          handleSelectGenre={this.handleSelectGenre}
          handleAddGenre={this.handleAddGenre}
          deleteBook={this.deleteBook}
          handleChangeEdit={this.handleChangeEdit}
          handleDeleteGenre={this.handleDeleteGenre}
          handleNewBook={this.handleNewBook}
          deleteAllBook={this.deleteAllBook}
        />
      </div>
    );
  }



}

export default App;
