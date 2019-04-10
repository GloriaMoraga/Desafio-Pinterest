import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageResult.css';
;
class ImageResults extends Component {
    
  render() { 
    const { images } = this.props;
    return (
      <div className="columns">
          {images.map(img => (
              <div className="tag">
                <img className="tagImage" alt={img.title} src={img.largeImageURL}/>
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

