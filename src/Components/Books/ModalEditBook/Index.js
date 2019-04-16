import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Genres from '../Genres/Index';


class ModalEditBook extends Component {
  state = {
    open: false,
    visibleView: false
  };

  constructor(props) {
		super(props);
    
    this.onBookUpdate = this.onBookUpdate.bind(this);
    this.deleteThisBook = this.deleteThisBook.bind(this);
    this.handleAddGenre = this.handleAddGenre.bind(this);
    this.showNewGenre = this.showNewGenre.bind(this);

  }
  handleAddGenre(e){
    if (e.key == "Enter") {
      e.preventDefault();
      e.stopPropagation();
    const {handleAddGenre, bookSelected} = this.props;
    handleAddGenre(bookSelected.genres.push(e.currentTarget.value), bookSelected.id);
    this.hideNewGenre()
    }
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
  showNewGenre(){
    this.setState({ visibleView: true });   
  }
  hideNewGenre(){
    this.setState({ visibleView: false });   
  }

deleteThisBook(){
  const { deleteBook, bookSelected, } = this.props;

  deleteBook(bookSelected.id);
}
  render() {
    const { bookSelected, handleDeleteGenre} = this.props;
    return (
            <div className="modalBackground row">

               <div className="col-md-12">tittle <input type="text" name="tittle" value={bookSelected.tittle} onChange={this.onBookUpdate} /></div>
               <div className="col-md-12">price  <input type="text" name="price" value={bookSelected.price} onChange={this.onBookUpdate} /></div>
               <div className="col-md-12">resume <textarea type="text" name="resume" value={bookSelected.resume}  onChange={this.onBookUpdate} /></div>

               <Genres selectBook={bookSelected} handleDeleteGenre={handleDeleteGenre}></Genres>
                {
                this.state.visibleView === true ? <input type="text" onKeyDown={this.handleAddGenre} /> :  <Button onClick={this.showNewGenre}> + </Button>
                }

               <Link className="" to={`/`}>
                 <Button onClick={this.deleteThisBook} id={bookSelected.id}>Delete</Button>
               </Link>
            </div>
       
    );
  }
}


export default ModalEditBook;
