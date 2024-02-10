import React from 'react';
import './Section1.scss';
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



 const Section1=()=>{
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Container className="sectionProducts mt-5 mb-5">
        <div className="title">
          Featured Products
        </div>

        <div className="slickSlider">
          <Slider {...settings} className="sliders">
<div className="slider">
    <div className="introSlider">
        <div className="img">
        <img  src={require(".//img/image 1168.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider card2">
        <div className="img">
        <img  src={require(".//img/image 1.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider">
        <div className="img">
        <img  src={require(".//img/image 1169.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider">
        <div className="img">
        <img  src={require(".//img/image 3.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider">
        <div className="img">
        <img  src={require(".//img/image 1168.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider card2">
        <div className="img">
        <img  src={require(".//img/image 1.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider">
        <div className="img">
        <img  src={require(".//img/image 1169.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

<div className="slider">
    <div className="introSlider">
        <div className="img">
        <img  src={require(".//img/image 3.png")}  alt=""  />
        </div>
        <div className="card-section">
            <div className="name">
Cantilever chair
            </div>
            <div className="colour">
        <img  src={require(".//img/Group 141.png")}  alt=""  />
            </div>
        <div className="code">
        Code - Y523201
        </div>
        <div className="price">
$42.00
        </div>

        </div>
    </div>
</div>

  
          </Slider>
        </div>
      </Container>
    );
  }



export default Section1;
