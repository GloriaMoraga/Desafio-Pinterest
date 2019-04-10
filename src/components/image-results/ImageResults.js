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

