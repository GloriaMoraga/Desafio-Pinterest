import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageResult.css';
;
class ImageResults extends Component {
    

  render() { 
    const { images, index } = this.props;
    return (
      <div className="columns" key={index}>
          {images.map(img => (
               <div className="tag"  key={img.id}>
                <img className="tagImage"  src={img.webformatURL} alt={img.tags}/>
               </div>
               
   
          ))}

        

      </div>
    )
  }
}
ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
export default ImageResults;

