import './Discount.scss';
import React from 'react';

const Discount = () => {
  return (
    <div className='Discount'>
<div className="title">
Discount Item
</div>
<div className="listItems">
    <ul>
        <li className='active'>Wood Chair</li>
        <li>Plastic Chair</li>
        <li>Sofa Collection </li>
    </ul>
</div>
<div className="container">
    <div className="row">
<div className="col-lg-6 discountItems">
<h3>20% Discount Of All Products</h3>
<span className='redTitle'>Eams Sofa Compact</span> <br />
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget  <br />
    feugiat habitasse nec, bibendum condimentum.</span>
    <div className="listItems1">
        <ul>
            <li>Material expose like metals</li>
            <li>Simple neutral colours.</li>
        </ul>

        <ul>
        <li>Clear lines and geomatric figures</li>
            <li>Material expose like metals</li>
        </ul>
    </div>
    <div className='discountButton'>
      <button>  Shop Now</button>
    </div>
</div>
<div className="col-lg-6 discountItems2">
<img src={require(".//img/Group 154.png")} alt="" />
</div>
    </div>
</div>
    </div>
  )
}

export default Discount;