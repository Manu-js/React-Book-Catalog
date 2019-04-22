import React from "react";
import Grid from '@material-ui/core/Grid';
import DeleteAll from "../DeleteAll/Index.js"
import DeleteGenre from "../DeleteGenre/Index.js"

import "./ConfigOption.css";

const Option = ({ handleDeleteAllBook, handleDeleteGlobalGenre,handleDeleteAllGenre, genres }) => (
  <Grid container>
    <Grid item xs={12}>
      <DeleteAll handleDeleteAll={handleDeleteAllBook} type={"books"}></DeleteAll>
      <DeleteAll handleDeleteAll={handleDeleteAllGenre} type={"genres"}></DeleteAll>
      <DeleteGenre handleDeleteGlobalGenre={handleDeleteGlobalGenre} genres={genres}></DeleteGenre>
    </Grid>
  </Grid>
);

export default Option;
