import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DeleteAllBoks from "../DeleteAllBoks/Index.js"
import "./Option.css";

class Book extends Component {

  render() {
    const { deleteAllBook } = this.props;

    return (
        <Grid container>
          <Grid item xs={12}>
            <DeleteAllBoks deleteAllBook={deleteAllBook}></DeleteAllBoks>
          </Grid>
        </Grid>
    );
  }
}

export default Book;
