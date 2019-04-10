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


  }
  handleChangeEdit(name, bookSelected, value) {
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, index) => {

          if ((index + 1) == (bookSelected.id)) {
            if (name === "tittle") {
              book = {
                ...book,
                tittle: value
              }
            } else if (name === "resume") {
              book = {
                ...book,
                resume: value
              }
            } else if (name === "price") {
              book = {
                ...book,
                price: value
              }
            } else if (name === "isbn") {
              book = {
                ...book,
                isbn: value
              }
            }

          }

          return book;
        })
      }
      return newState;
    })


  }
  deleteBook(e) {
    var array = [...this.state.books]; // make a separate copy of the array

    // 		books: prevState.books.filter(() => {
    // 			    array.map(function (item, i) {
    //             if (item.id == idBook){
    //                array.splice(i, 1);
    //             }
    //           })
    //           return array;
    // 		})
    // 	}

    const idBook = e.target.id;
    this.setState(prevState => {
      const newState = {
        books: prevState.books.map((book, ind) => {

          if (ind == (idBook - 1)) {

            book = {
              ...book,
              tittle: "pepe"
            }
            console.log(book);
          }

          return book;
        })
      }
      return newState;
    })
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
        <Main books={books} deleteBook={this.deleteBook} handleChangeEdit={this.handleChangeEdit} />
      </div>
    );
  }



}

export default App;
