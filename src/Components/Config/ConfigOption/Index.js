import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteAllBooks from "../DeleteAllBooks/Index.js"
import "./ConfigOption.css";

const Option = ({ handleDeleteAllBook }) => (
  <Grid container>
    <Grid item xs={12}>
      <DeleteAllBooks handleDeleteAllBook={handleDeleteAllBook}></DeleteAllBooks>
      <Button className="buttonLink" variant="contained" href={"https://www.w3schools.com"}>My Linkedin</Button>
      <Button className="buttonLink" variant="contained" href={"https://www.linkedin.com/in/manuelsc/"}>My GitHub</Button>
    </Grid>
  </Grid>
);

export default Option;
