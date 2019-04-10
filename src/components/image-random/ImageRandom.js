import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import './imagerandom.css';
import useInfiniteScroll from "../useInfiniteScroll";



class ImageRandom extends Component {
    
 render()
   { 
    const { image } = this.props;
   return (
      <div className="columns">
          {image.map(img => (
              <div className="tag" id={img.id}>
                  <img className="tagImage" alt={img.tag} src={img.largeImageURL}/>
              </div>

          ))}
          {/* {isFetching && 'Fetching more list items...'} */}

      </div>
    )
  }
}

ImageRandom.propTypes = {
    image: PropTypes.array.isRequired
}
export default ImageRandom;

