import React from "react";
import GenreCheck from '../GenreCheck/Index';
import "./CheckList.css";

const CheckList = ({ genresFiltered, genres, handleSelectGenre }) => (
  <section>
    <ul >
      {genres.map(function (genre) {
        return <li
          key={genre}
          className="listGenres">
          <GenreCheck
            key={genre}
            genresFiltered={genresFiltered}
            handleSelectGenre={handleSelectGenre}
            genre={genre}>
          </GenreCheck>
        </li>
      })}
    </ul>
  </section>
);

export default CheckList;
