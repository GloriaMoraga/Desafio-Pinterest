import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';
import './ImageResult.css';

class ImageResults extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }
    

  render() { 
    const { images, index } = this.props;
    return (
      <div className="columns" key={index}>
          {images.map(img => (
               <div className="tag"  key={img.id}>
             <a href="#" onClick={this.toggleModal}> <img className="tagImage"  src={img.webformatURL} alt={img.tags}/></a>
          
               </div>
         
   
          ))}

          <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <h2>Funciona</h2>
            
          </React.Fragment>
        </Modal> 

      </div>
    )
  }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResults;

