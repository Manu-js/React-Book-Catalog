import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "./NewBook.css";


class NewBook extends Component {
  state = {
    open: false,
    tittleValue: '',
    priceValue: '',
    isbnValue: ''

  };
  	constructor(props) {
		super(props);

		this.handleBookAdd = this.handleBookAdd.bind(this);
	}


	handleBookAdd(e) {
    const { handleNewBook } = this.props;
		handleNewBook(this.state.tittleValue, this.state.priceValue, this.state.isbnValue);
	}
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
};
  render() {
    return (
            <div className="modalBackground">
                <input value={this.state.tittleValue} type="text" name="tittleValue" onChange={evt => this.updateInputValue(evt)} />
                <input value={this.state.priceValue} type="text" name="priceValue" onChange={evt => this.updateInputValue(evt)} />
                <input value={this.state.isbnValue} type="text" name="isbnValue" onChange={evt => this.updateInputValue(evt)} />
                <textarea type="text" name="resume"  />
                <Button onClick={this.handleBookAdd}>nuevo libro</Button>

            </div>
       
    );
  }

  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}


export default NewBook;
