import React from 'react';
import './Section2.scss';

const Section2 = () => {
  return (
    <div className='Section2'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 col-md-6 sofaImg">
                <img  src={require(".//img/Group 153.png")}  alt=""  />
                </div>
                <div className="col-lg-6 col-12 col-md-6 text">
<div className="title">
Unique Features Of leatest &
Trending Poducts
</div>
<div className='list'>
    <ul>
        <li >All frames constructed with hardwood solids and laminates</li>
        <li >Reinforced with double wood dowels, glue, screw - nails corner 
blocks and machine nails</li>
        <li >Arms, backs and seats are structurally reinforced</li>
    </ul>
</div>
<div className='buttonText'>
<button className='button'>Add To Cart </button>
   <button className="button2">
   <span>B&B Italian Sofa</span> <br />
    <span>$32.00</span>
   </button>
</div>

                </div>



                
                </div>
        </div>


    </div>
  )
}

export default Section2;