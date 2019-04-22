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
  handleModifyBook,
  handleNewBook,
  handleDeleteGenre,
  handleAddGenre,
  handleSelectGenre,
  handleDeleteAllGenre,
  handleDeleteAllBook,
  handleDeleteGlobalGenre,
  isLoaded }) => (
    <main className="appMain">
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
                handleModifyBook={handleModifyBook}
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
              handleDeleteAllBook={handleDeleteAllBook}
              handleDeleteGlobalGenre = {handleDeleteGlobalGenre}
              handleDeleteAllGenre = {handleDeleteAllGenre}
              genres = {genres}>
              </ConfigOption>
            )
          }}
        />
      </Switch>
    </main>
  );

export default Main;
