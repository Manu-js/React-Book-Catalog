import React, { Component } from "react";
import "./Main.css";
import Booklist from "../Books/Booklist/Index";
import Option from "../Option/Index";

import { Switch, Route } from 'react-router-dom';

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
      handleSelectGenre,
      deleteAllBook
    } = this.props;
    return (
      <main className="row">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Booklist genresFiltered={genresFiltered} books={books} genres={genres} handleAddGenre={handleAddGenre} deleteBook={deleteBook} handleChangeEdit={handleChangeEdit} handleDeleteGenre={handleDeleteGenre} handleSelectGenre={handleSelectGenre} handleNewBook={handleNewBook}/>
                )
              }}
            />
            <Route
              path="/config"
              render={() => {
                return (
                  <Option deleteAllBook={deleteAllBook}></Option>
                  )
              }}
            />
          </Switch>

      </main>
    );
  }
};


export default Main;
