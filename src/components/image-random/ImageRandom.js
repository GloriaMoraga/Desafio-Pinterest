import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imagerandom.css';
import Modal from '../modal/Modal';



class ImageRandom extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }
render()
   { 
    const { image } = this.props;
   return (
     <div className="columns">
          {image.map(img => (
              <div className="tag" key={img.id} >
              <a href="#" onClick={this.toggleModal}> <img className="tagImage"  alt={img.tag} src={img.largeImageURL}/></a>
              </div>

       

          ))}


          <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <h2>Funciona!</h2>
            
            <img className="tagImage"  alt="modal" src={this.state.image}/>
          </React.Fragment>
        </Modal> 
        

      </div>
    )
  }
}

ImageRandom.propTypes = {
    image: PropTypes.array.isRequired
}
export default ImageRandom;

