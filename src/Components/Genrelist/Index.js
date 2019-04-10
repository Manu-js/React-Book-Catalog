import React, { Component } from "react";
import "./Booklist.css";
import Generelist from '../Book/Index'


class GenerList extends Component {
  render() {
    const { books } = this.props;

    return (
    <div className="right_app col-md-10">

      <ul>
      {books.map(function(book, i){
        return <genre Genre={book}/>
      })}
     </ul>
      </div>
    );
  }
}



export default GenerList;
