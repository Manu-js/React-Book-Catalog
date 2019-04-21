import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteAllBoks from "../DeleteAllBoks/Index.js"
import "./ConfigOption.css";

const Option = ({ handleDeleteAllBook }) => (
  <Grid container>
    <Grid item xs={12}>
      <DeleteAllBoks handleDeleteAllBook={handleDeleteAllBook}></DeleteAllBoks>
      <Button className="buttonLink" variant="contained" href={"https://www.w3schools.com"}>My Linkedin</Button>
      <Button className="buttonLink" variant="contained" href={"https://www.w3schools.com"}>My GitHub</Button>
    </Grid>
  </Grid>
);

export default Option;
