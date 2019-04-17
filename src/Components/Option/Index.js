import React, { Component } from "react";
import Button from '@material-ui/core/Button';

import "./Option.css";

class Book extends Component {
    constructor(props) {
        super(props);
    
        this.deleteAllBook = this.deleteAllBook.bind(this);

      }
    deleteAllBook(){
        const { deleteAllBook } = this.props;
        deleteAllBook();
    }
  render() {

    return (
     
        <div className="row">
            <div className="col-md-12">
                <Button
                    onClick={this.deleteAllBook}
                >Bye bye</Button>
            </div>
            <div className="col-md-12">
                adios
            </div>
            <div className="col-md-12">
                que dices
            </div>

        </div>

    );
  }
}


export default Book;
