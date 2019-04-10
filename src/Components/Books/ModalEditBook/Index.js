import React, { Component } from "react";


class ModalEditBook extends Component {
  state = {
    open: false,
  };
  	constructor(props) {
		super(props);

		this.onBookUpdate = this.onBookUpdate.bind(this);
	}


	onBookUpdate(e) {
    const { bookSelected, handleChangeEdit } = this.props;
		handleChangeEdit(e.currentTarget.name, bookSelected, e.currentTarget.value);
	}
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
};
  render() {
    const { bookSelected} = this.props;
    return (
            <div>
                <input type="text" name="tittle" value={bookSelected.tittle} onChange={this.onBookUpdate} />
                <input type="text" name="price" value={bookSelected.price} onChange={this.onBookUpdate} />
                <input type="text" name="isbn" value={bookSelected.isbn} onChange={this.onBookUpdate} />
                <textarea type="text" name="resume" value={bookSelected.resume}  onChange={this.onBookUpdate} />
            </div>
       
    );
  }
}


export default ModalEditBook;