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
      genreList: []
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleNewBook = this.handleNewBook.bind(this);


  }
  handleChangeEdit(name, bookSelected, value) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {
          if ((index) === (bookSelected.id)) {
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
  handleNewBook(value, value1, value2) {
    console.log("el tamaño es: ", this.state.books);
    const newBook = {
      "tittle": value,
      "resume": value1,
      "genres": ["drama", "suspense"],
      "image": "http://hp-api.herokuapp.com/images/harry.jpg",
      "id": this.state.books.length,
      "price": 20
    };
    this.setState(previousState => ({
      books: [...previousState.books, newBook]
    }));

  }
  deleteBook(idBook) {
    this.setState(prevState =>({
      books: prevState.books.filter(book => book.id !== parseInt(idBook)) 
    }));
  }


  componentDidMount() {
    const auxArray = [];
    booksJson.map(function (item, i) {
      item.genres.map(function (item, i) {
        if (auxArray.indexOf(item) === -1) {
          auxArray.push(item);
        }
      });
    })
    this.setState({
      genreList: auxArray
    });

  }

  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <Header />
        <Main books={books} deleteBook={this.deleteBook} handleChangeEdit={this.handleChangeEdit} handleNewBook={this.handleNewBook} />
      </div>
    );
  }



}

export default App;
