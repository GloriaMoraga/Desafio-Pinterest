import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageResult.css';
;
class ImageResults extends Component {
    
modal(){
     
document.getElementById('modalBox').style.display="block";
      

  }

  render() { 
    const { images } = this.props;
    return (
      <div className="columns">
          {images.map(img => (
               <div className="tag" id={img.id}>
                <a href="#modalBox"><img className="tagImage" alt={img.title} src={img.webformatURL}/></a>
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

