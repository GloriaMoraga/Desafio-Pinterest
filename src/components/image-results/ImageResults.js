import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageResult.css';
class ImageResults extends Component {
  render() { 
    const { images } = this.props;
    return (
      <div className="container-box-img">
          {images.map(img => (
              <div className="imgBox">
                  <h6>{img.title}</h6>
                  <img className="imgresult" alt={img.title} src={img.largeImageURL}/>
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