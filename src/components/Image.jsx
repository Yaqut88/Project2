import React from 'react';
import './Image.scss';

const Image = () => {
  return (
    <div className='Image'>
 <div className="container">
    <div className="row">
        <div className="col-lg-12 col-12 FooterBottomImage">
        <img src={require(".//img/image 1174.png")} alt="" />
        </div>
    </div>
 </div>
      
    </div>
  )
}

export default Image;