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

  }
  
  getGenres() {
    const auxArray = [];
    booksJson.map(function (item, i) {
      item.genres.map(function (item, i) {
        if (auxArray.indexOf(item) === -1) {
          auxArray.push(item);
        }
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
    
    var arrayAux = [];
    this.state.books.map((book) => {
      const found = book.genres.some(r=> auxArray.indexOf(r) >= 0)
      
      if (found === true){
        arrayAux.push(book)
      }
    })
    if (arrayAux.length !== 0) {
      this.setState(prevState => ({
        books: arrayAux
      }));
    } else {
      this.setState(prevState => ({
        books: booksJson
      }));
    }
  })

  }

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
        genres: prevState.genres.concat(genre) 

      }
      return newState;
    })

  }

  handleNewBook(value, value1) {
    const newBook = {
      "tittle": value,
      "resume": value1,
      "genres": ["drama", "suspense"],
      "image": "http://hp-api.herokuapp.com/images/harry.jpg",
      "id": this.state.books.length, // corregir esto. Esto hace que puedas tener dos ID. Necesito coger la ultima id y sumar una mas
      "price": 20
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
    const { books, genres, genresFiltered } = this.state;
    return (
      <div className="App">
        <Header />
        <Main 
          books={books}
          genres={genres}
          genresFiltered={genresFiltered} 
          handleSelectGenre={this.handleSelectGenre}
          handleAddGenre={this.handleAddGenre} 
          deleteBook={this.deleteBook} 
          handleChangeEdit={this.handleChangeEdit} 
          handleDeleteGenre={this.handleDeleteGenre}
          handleNewBook={this.handleNewBook} 
        />
      </div>
    );
  }



}

export default App;
