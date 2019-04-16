import React, { Component } from "react";
import "./Main.css";
import Booklist from "../Books/Booklist/Index";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookEdit from '../Books/BookEdit/Index'
class Main extends Component {
  render() {
    const {
      books,
      genres,
      genresFiltered,
      deleteBook,
      handleChangeEdit,
      handleNewBook,
      handleDeleteGenre,
      handleAddGenre,
      handleSelectGenre
    } = this.props;
    return (
      <main className="row">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Booklist genresFiltered={genresFiltered} books={books} genres={genres} handleSelectGenre={handleSelectGenre} handleNewBook={handleNewBook} handleFilter={handleFilter}/>
                )
              }}
            />
            <Route
              path="/book/:id"
              render={props => {
                return (
                  <BookEdit match={props.match} books={books} handleAddGenre={handleAddGenre} deleteBook={deleteBook} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre} />
                )
              }}
            />
          </Switch>
        </BrowserRouter>

      </main>
    );
  }
};


export default Main;
