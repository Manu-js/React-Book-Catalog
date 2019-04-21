import React from "react";
import BooksView from "../Books/BooksView/Index";
import ConfigOption from "../Config/ConfigOption/Index";
import { Switch, Route } from 'react-router-dom';
import "./Main.css";

const Main = ({
  books,
  genres,
  genresFiltered,
  handleDeleteBook,
  handleChangeEdit,
  handleNewBook,
  handleDeleteGenre,
  handleAddGenre,
  handleSelectGenre,
  handleDeleteAllBook,
  isLoaded }) => (
    <main className="app__main">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <BooksView
                genresFiltered={genresFiltered}
                books={books}
                genres={genres}
                handleAddGenre={handleAddGenre}
                handleDeleteBook={handleDeleteBook}
                handleChangeEdit={handleChangeEdit}
                handleDeleteGenre={handleDeleteGenre}
                handleSelectGenre={handleSelectGenre}
                handleNewBook={handleNewBook}
                isLoaded={isLoaded}
              />
            )
          }}
        />
        <Route
          path="/config"
          render={() => {
            return (
              <ConfigOption
              handleDeleteAllBook={handleDeleteAllBook}>
              </ConfigOption>
            )
          }}
        />
      </Switch>
    </main>
  );

export default Main;
