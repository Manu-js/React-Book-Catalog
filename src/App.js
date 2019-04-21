import React, { Component } from "react";
import Header from "./Components/Header/Index.js";
import Main from "./Components/Main/Index.js";
import { booksJson } from "./Services/ApiBook";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksJson,
      genres: [],
      genresFiltered: [],
      isLoaded: false
    };
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleNewBook = this.handleNewBook.bind(this);
    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.handleSelectGenre = this.handleSelectGenre.bind(this);
    this.handleDeleteAllBook = this.handleDeleteAllBook.bind(this);
  }
  componentDidMount() {
    this.getGenres();
    setTimeout(
      function () {
        this.setState(prevState => {
          const newState = {
            isLoaded: true
          };
          return newState;
        });
      }.bind(this),
      2000
    );
  }

  getGenres() {
    const auxArray = [];
    booksJson.map(item => {
      return item.genres.map(item => {
        if (auxArray.indexOf(item) === -1) {
          auxArray.push(item);
        }
        return auxArray;
      });
    });
    this.setState(prevState => ({
      genres: auxArray
    }));
  }

  handleSelectGenre(e) {
    const { checked, value } = e;
    let auxArray = this.state.genresFiltered;
    if (!checked) {
      var index = auxArray.indexOf(value);
      if (index !== -1) {
        auxArray.splice(index, 1);
      }
    } else {
      auxArray.push(value);
    }
    this.setState(prevState => ({
      genresFiltered: auxArray
    }));
  }

  getBookList() {
    const { books, genresFiltered } = this.state;
    let auxVar = [];
    for (const book of books) {
      const found = book.genres.some(r => genresFiltered.indexOf(r) >= 0);
      if (found === true) {
        auxVar.push(book);
      }
    }
    if (auxVar.length !== 0) {
      return auxVar;
    } else {
      return books;
    }
  }

  handleDeleteAllBook() {
    this.setState({ books: [] });
  }

  handleChangeEdit(name, bookSelected, value) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {
          if (book.id === bookSelected.id) {
            book = {
              ...book,
              [name]: value
            };
          }
          return book;
        })
      };
      return newState;
    });
  }

  handleAddGenre(genre, idBook) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {
          if (book.id === idBook) {
            book = {
              ...book,
              genres: book.genres.concat(genre)
            };
          }
          return book;
        }),
        genres:
          this.isGenreExist(genre) === -1
            ? prevState.genres.concat(genre)
            : prevState.genres
      };
      return newState;
    });
  }

  isGenreExist(inputGenre) {
    const genres = this.state.genres;
    return genres.indexOf(inputGenre);
  }
  handleNewBook(newBook) {
    let newGenreArray = this.state.genres;
    newBook.genres.map(genre => {
      if (this.isGenreExist(genre) === -1) {
        newGenreArray.push(genre);
      }
      return genre;
    });
    newBook.id =
      this.state.books.length !== 0
        ? this.state.books[this.state.books.length - 1].id + 1
        : 0;
    this.setState(prevState => ({
      books: prevState.books.concat(newBook),
      genres: newGenreArray
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
            };
          }
          return book;
        })
      };
      return newState;
    });
  }

  handleDeleteBook(idBook) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.filter(book => book.id !== parseInt(idBook))
      };
      return newState;
    });
  }

  render() {
    const { genres, genresFiltered, newBookData, isLoaded } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          books={this.getBookList()}
          genres={genres}
          genresFiltered={genresFiltered}
          newBookData={newBookData}
          handleSelectGenre={this.handleSelectGenre}
          handleAddGenre={this.handleAddGenre}
          handleDeleteBook={this.handleDeleteBook}
          handleChangeEdit={this.handleChangeEdit}
          handleDeleteGenre={this.handleDeleteGenre}
          handleNewBook={this.handleNewBook}
          handleDeleteAllBook={this.handleDeleteAllBook}
          isLoaded={isLoaded}
        />
      </div>
    );
  }
}

export default App;
