import React from 'react';
import './LatestProducts.scss';
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



export default function LatestProducts() {
    return (
        <div className='latestProducts mt-5'>
            <div className='title'>
                Latest Products
            </div>
            <div className="productTitles">
                <ul>
                    <li className='active'>New Arriwal</li>
                    <li>Best Seller</li>
                    <li>Featured</li>
                    <li>Special Offer</li>
                </ul>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12 col-md-6 product">
                        <div className='productImage'>
                            <img src={require(".//img/image 1166.png")} alt="" />
                        </div>
                        <div className='products'>
                            <div className="productsName">
                                <span>Comford Handy Craft</span>
                            </div>
                            <div className='productsPrice'>
                                <span> $42.00</span> &nbsp;
                                <span className='nextPrice'> $65.00</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-12 col-md-6 product secondimage">

                        <div className='productImage secondImage'>
                            <img src={require(".//img/image 15.png")} alt="" />
                        </div>
                        <div className='icons'> 
                        <FiShoppingCart/> <br />
                            <FaRegHeart /> <br />
                            <FaSearchPlus /> <br />
                        </div>
                        <div className="saleImage">
                        <img src={require(".//img/Group 27.png")} alt="" />

                        </div>
                        <div className='products'>
                            <div className="productsName">
                                <span>Comford Handy Craft</span>
                            </div>
                            <div className='productsPrice'>
                                <span> $42.00</span> &nbsp;
                                <span className='nextPrice'> $65.00</span>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-12 col-md-6 product">

                        <div className='productImage'>
                            <img src={require(".//img/image 1168 (1).png")} alt="" />
                        </div>
                        <div className='products'>
                            <div className="productsName">
                                <span>Comford Handy Craft</span>
                            </div>
                            <div className='productsPrice'>
                                <span> $42.00</span> &nbsp;
                                <span className='nextPrice'> $65.00</span>
                            </div>

                        </div>      </div>

                    <div className="col-lg-4 col-12 col-md-6 product">

                        <div className='productImage'>
                            <img src={require(".//img/image 23.png")} alt="" />
                        </div>
                        <div className='products'>
                            <div className="productsName">
                                <span>Comford Handy Craft</span>
                            </div>
                            <div className='productsPrice'>
                                <span> $42.00</span>  &nbsp;
                                <span className='nextPrice'>  $65,00</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-12 col-md-6 product">

                        <div className='productImage'>
                            <img src={require(".//img/image 32 (1).png")} alt="" />
                        </div>
                        <div className='products'>
                            <div className="productsName">
                                <span>Comford Handy Craft</span>
                            </div>
                            <div className='productsPrice'>
                                <span> $42.00</span>  &nbsp;
                                <span className='nextPrice'> $65.00</span>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-12 col-md-6 product">

                        <div className='productImage'>
                            <img src={require(".//img/image 3 (2).png")} alt="" />
                        </div>
                        <div className='products'>
                            <div className="productsName">
                                <span>Comford Handy Craft</span>
                            </div>
                            <div className='productsPrice'>
                                <span> $42.00</span>  &nbsp;
                                <span className='nextPrice'> $65.00</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
