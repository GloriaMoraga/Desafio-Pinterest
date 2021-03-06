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
            <div>
               <div className="tag"  key={img.id}>
             <a href="#" onClick={this.toggleModal}> <img className="tagImage"  src={img.webformatURL} alt={img.tags}/></a>
          
               </div>
         
   
          

          <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
        <React.Fragment>
            <div className="modal-button">
            <i className="fas fa-ellipsis-h icon-class"></i>
            <div className="buttons">
            <button className="btn-modal m-r1">Enviar</button>
            <button className="btn-modal">Tipo</button>
            <button className="btn-modal">Guardar</button></div>
            </div>
            <div className="modal-contenedor"> 
              <div className="modal-image"><img key={img.id} alt={img.tag} src={img.largeImageURL}/></div> 
              <div className="modal-title">
              <h3>Fotos y Comentarios</h3>
              <button className="btn-modal">Fotos</button>
              <p>¿Has probado este Pin? Añade una foto para mostrar cómo ha ido</p></div>
            </div>
           
            
           
          </React.Fragment>
        </Modal></div>
      ))}
      </div>
    )
  }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResults;

