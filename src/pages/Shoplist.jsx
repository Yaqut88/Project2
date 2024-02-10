import './/ShopList.scss'
import MiniNavbar from '../components/MiniNavbar'
import NavbarTop from '../components/NavbarTop'
import Image from '../components/Image'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const Shoplist = () => {
    return (
        <div>
            <MiniNavbar />
            <NavbarTop />

            <div className="container Breadcrumb">
                <div className="title">
                    Shop List
                </div>
                <div className="row">
                    <div className="col-12 breadcrumbItems">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/shoplist">Pages</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Shop list</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="container shopSection">
                <div className="title">
                    <p>E-commerce Acsessories & Fashion item</p>
                    <span>About 9,620 results (0.62 seconds)</span>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32.png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>Accumsan Tincidunt</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32 (1).png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>In nulla</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32 (2).png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>Vel sem</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32 (3).png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>Porttitor cum</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32 (4).png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>Nunc in</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32 (5).png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>Vitae facilisis</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <img src={require("../components/img/Rectangle 32 (6).png")} alt="" />

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 shopSectionRight">
                        <div className="shopTitle">
                            <p>Curabitur lectus</p>
                        </div>
                        <div className="price">
                            <span className='shopPrice1'>$26.00</span> &nbsp;
                            <span className='shopPrice2'>$52.00</span>
                            <div className="starItems">
                                <ul>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star1.png")} alt="" />
                                    <li></li>
                                    <img src={require("../components/img/star.png")} alt="" />
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ShopInformation">
                            <p>Lorem ipsum dolor sit amet, consecte
                                tur adipiscing elit. Magna in est <br /> adipiscing
                                in phasellus non in justo.</p>
                        </div>

                        <div className="shopIcons">
                            <FiShoppingCart /> &nbsp; &nbsp; &nbsp;
                            <FaRegHeart /> &nbsp; &nbsp; &nbsp;
                            <FaSearchPlus />
                        </div>

                    </div>

                </div>
            </div>
<Image/>

            <Footer />
            <FooterBottom />

        </div>
    )
}

export default Shoplist;