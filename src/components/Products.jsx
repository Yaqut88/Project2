import React from 'react'
import './Products.scss'
const Products = () => {
  return (
    <div className='Products'>
        <div className="title">
            Trending Products
        </div>
<div className="container">
    <div className="row">
        <div className="col-lg-3  col-md-6 col-sm-12 cardSection">
<div className="img">

<img  src={require(".//img/image 1171.png")}  alt=""  />

</div>

<div className="sofaName">
    Cantilever chair
</div>
<div className="sofaPrice">
    <span className='firstPrice'>$26.00</span>
    <span className='secondPrice'>$42.00</span>
</div>
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-12 cardSection">
<div className="img">
<img  src={require(".//img/image 1170.png")}  alt=""  />

</div>

<div className="sofaName">
    Cantilever chair
</div>
<div className="sofaPrice">
<span className='firstPrice'>$26.00</span>
    <span className='secondPrice'>$42.00</span>
   
</div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 cardSection">
<div className="img">
<img  src={require(".//img/image 31.png")}  alt=""  />
</div>

<div className="sofaName">
    Cantilever chair
</div>
<div className="sofaPrice">
<span className='firstPrice'>$26.00</span>
    <span className='secondPrice'>$42.00</span>
</div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 cardSection">
<div className="img">
<img  src={require(".//img/image 32 (2).png")}  alt=""  />
</div>

<div className="sofaName">
    Cantilever chair
</div>
<div className="sofaPrice">
<span className='firstPrice'>$26.00</span>
    <span className='secondPrice'>$42.00</span>
</div>
        </div>

    </div>

<div className="row trendingProducts mt-5">
    <div className="col-lg-4 firstSection">
<div className='allProducts'>
    <span>23% off in all products</span> <br />
    <a href="/">Shop Now</a>
</div>
<div>
<img  src={require(".//img/image 1162.png")}  alt=""  />
    
</div>
    </div>
    <div className="col-lg-4 secondSection">
<div className='allProducts'>
    <span>23% off in all products</span> <br />
    <a href="/">View Collection</a>
</div>
<div>
<img  src={require(".//img/image 1161.png")}  alt=""  />
    
</div>
    </div>

    <div className="col-lg-3 thirdSection">
<div className='d-flex'>
<div className='chair'>
<img  src={require(".//img/image 30.png")}  alt=""  />
</div>
    <div>
    <span className='chairName'> Executive Seat chair</span>  <br />
         <span className='chairPrice'>$32.00</span> 
         </div>
</div>


<div className='d-flex'>
 <div className='chair'>
 <img  src={require(".//img/image 19.png")}  alt=""  />
</div>
<div>
  <span className='chairName'> Executive Seat chair</span>   <br />
         <span className='chairPrice'>$32.00</span>
         </div>
</div>

<div className='d-flex'>
<div className='chair'> 
<img  src={require(".//img/image 28.png")}  alt=""  />
</div>
<div>
<span className='chairName'> Executive Seat chair</span>  <br />
         <span className='chairPrice'>$32.00</span>
         </div>
</div>
    </div>

</div>


</div>
    </div>
  )
}

export default Products;