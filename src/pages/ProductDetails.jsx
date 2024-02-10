import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import NavbarTop from '../components/NavbarTop'
import Image from '../components/Image'
import FooterBottom from '../components/FooterBottom'
import Footer from '../components/Footer'
import './ProductDetails.scss'
import {Link} from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";




const ProductDetails = () => {
  return (
    <div>
        <MiniNavbar/>
        <NavbarTop/>

        <div className="container Breadcrumb">
                <div className="title">
                    Product Details
                </div>
                <div className="row">
                    <div className="col-12 breadcrumbItems">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/shoplist">Pages</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Product Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

<div className="container productDetails">
  <div className="row">
    <div className="col-lg-2 productImages">
   <div>
   <img src={require("../components/img/Rectangle 134.png")} alt="" />
   </div>
    <div>
    <img src={require("../components/img/Rectangle 136.png")} alt="" />
    </div>
   <div> 
    <img src={require("../components/img/Rectangle 137.png")} alt="" />
    </div>

    </div>
    <div className="col-lg-4">
    <img src={require("../components/img/Rectangle 138.png")} alt="" />

    </div>
    <div className="col-lg-6 productSection">
      <div className='ptag'>
      <p>Playwood arm chair</p>
      </div>
      <div>
    <img src={require("../components/img/Group 236.png")} alt="" />
        <span>(22)</span>
      </div>
  
      <div className='productsPrice'>
                                <span className='productPrice1'> $42.00</span> &nbsp;
                                <span className='productPrice2'> $65.00</span>
                            </div>

<div className='color'>
  <p>Color</p>
</div>
<div className='spantag'>
  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Mauris tellus <br /> porttitor purus, et volutpat sit.</span>
</div>
<div className='addtocart'>
  Add to cart   <FaRegHeart />
</div>
<div className='productSpanTag'>
 
    <span>Categories</span>  <br />
    <span>Tags</span> <br />
    <span>Share  </span>  &nbsp; <FaFacebook/> <FaInstagram/>  <FaTwitter/>

</div>

    </div>
  </div>
</div>


<div className="container productInfojsx">
<div className="row">
  <div className="productItems">
    <ul>
      <li className='firstLi'>Description</li>
      <li>Additional Info</li>
      <li>Reviews</li>
      <li>Video</li>
    </ul>
  </div>
  <div className="col-lg-12 details">
    <h4>Varius tempor.</h4>
    <p>Aliquam dis vulputate vulputate integer sagittis.
       Faucibus dolor ornare faucibus vel sed et eleifend 
       habitasse amet. Montes, mauris varius ac est bibendum.
        Scelerisque a, risus ac ante. Velit consectetur neque,
         elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus
           cras justo, tortor sed donec tempus. Imperdiet consequat,
            quis diam arcu, nulla lobortis justo netus dis.
       Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
       <h4>More Details</h4>
       <p> <FaLongArrowAltRight /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
        <p> <FaLongArrowAltRight /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
        <p> <FaLongArrowAltRight /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
        <p> <FaLongArrowAltRight /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        Eu in fringilla vulputate nunc nec. Dui, massa viverr . </p>
  </div>
</div>
</div>


        <Image/>
        <Footer/>
        <FooterBottom/>
    </div>
  )
}

export default ProductDetails