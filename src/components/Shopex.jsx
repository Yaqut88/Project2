import React from 'react';
import './Shopex.scss'

const Shopex = () => {
    return (
        <div className='Shopex'>
            <div className="title">
                What Shopex Offer
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require(".//img/Group (1).png")} alt="" style={{marginTop: '22px'}} />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require(".//img/cashback 1.png")} alt="" />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div>
                     <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require(".//img/premium-quality 1.png")} alt="" />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-6 col-12 shopex">
                        <div className="cardImage">
                            <img src={require(".//img/24-hours-support 1.png")} alt="" />
                        </div>
                        <div className="cardTime">
                            24/7 Support
                        </div>
                        <div className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Shopex;