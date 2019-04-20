import React from "react";
import BooksView from "../Books/BooksView/Index";
import Option from "../Config/Option/Index";
import { Switch, Route } from 'react-router-dom';
import "./Main.css";

const Main = ({
  books,
  genres,
  genresFiltered,
  deleteBook,
  handleChangeEdit,
  handleNewBook,
  handleDeleteGenre,
  handleAddGenre,
  handleSelectGenre,
  deleteAllBook,
  addNewBookParam,
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
                deleteBook={deleteBook}
                handleChangeEdit={handleChangeEdit}
                handleDeleteGenre={handleDeleteGenre}
                handleSelectGenre={handleSelectGenre}
                handleNewBook={handleNewBook}
                addNewBookParam={addNewBookParam}
                isLoaded={isLoaded}
              />
            )
          }}
        />
        <Route
          path="/config"
          render={() => {
            return (
              <Option
                deleteAllBook={deleteAllBook}>
              </Option>
            )
          }}
        />
      </Switch>
    </main>
  );

export default Main;
