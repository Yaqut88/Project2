import React from 'react';
import './Blog.scss';
import { CgCalendarDates } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";



const Blog = () => {
    return (
        <div className='Blog'>
            <div className="title mb-5">
                Latest Blog
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={require(".//img/JIUjvqe2ZHg.png")} alt="" />
                            <div className="card-body">
                                <div className='date'>
                                    <span> <FaPencil /> SaberAli</span>
                                    <span>  <CgCalendarDates />  21 August,2020</span>
                                </div>


                                <h5 className="card-title">Top essential Trends in 2021</h5>
                                <p className="card-text">More off this less hello samlande lied much
                                    over tightly circa horse taped mightly
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={require(".//img/2dcYhvbHV-M.png")} alt="" />

                            <div class="card-body">
                                <div className='date'>
                                    <span> <FaPencil /> Surfauxion</span>
                                    <span>  <CgCalendarDates /> 21 August,2020</span>
                                </div>
                                <h5 className="card-title second">Top essential Trends in 2021</h5>

                                <p className="card-text">More off this less hello samlande lied much
                                    over tightly circa horse taped mightly
                                </p>
                                <a  className='secondA' href="/">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                            <img src={require(".//img/2dcYhvbHV-M (1).png")} alt="" />

                            <div className="card-body">

                                <div className='date'>
                                    <span> <FaPencil />  SaberAli</span>
                                    <span> <CgCalendarDates />  21 August,2020</span>
                                </div>
                                <h5 className="card-title">Top essential Trends in 2021</h5>
                                <p className="card-text">More off this less hello samlande lied much
                                    over tightly circa horse taped mightly
                                </p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog;