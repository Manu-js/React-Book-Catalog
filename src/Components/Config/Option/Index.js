import React from "react";
import Grid from '@material-ui/core/Grid';
import DeleteAllBoks from "../DeleteAllBoks/Index.js"
import "./Option.css";

const Option = ({ deleteAllBook }) => (
  <Grid container>
    <Grid item xs={12}>
      <DeleteAllBoks deleteAllBook={deleteAllBook}></DeleteAllBoks>
    </Grid>
  </Grid>
);

export default Option;
