import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './imagerandom.css';




class ImageRandom extends Component {



    
 render()
   { 
    const { image } = this.props;
   return (
      <div className="columns">
          {image.map(img => (
              <div className="tag" key={img.id} >
              <img className="tagImage"  alt={img.tag} src={img.largeImageURL}/>
              </div>

          ))}
        

      </div>
    )
  }
}

ImageRandom.propTypes = {
    image: PropTypes.array.isRequired
}
export default ImageRandom;

