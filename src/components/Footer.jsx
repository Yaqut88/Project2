import "./Footer.scss";


const Footer=()=>{
    return(
        <div className="Footer">
            <div className="container mt-5">
<div className="row  footerTop">
    <div className="col-md-6 col-lg-4  col-12 footer1">
<h1>Hekto</h1> <br/>
<input type="email" placeholder="  Enter Email Adress" />

<button>Sign Up</button>
 <br/> <br/>
<span>Contact Info</span> <br/>
<span>17 Princess Road, London, Greater London NW1 8JR, UK</span>


    </div>
    <div className="col-md-3 col-lg-3 col-12 footer2">
<h3>Categories</h3> <br/>
<p>Laptops & Computers</p>
<p>Cameras & Photography</p>
<p>Smart Phones & Tablets</p>
<p>Video Games & Consoles</p>
<p>Wateproof Headphones</p>
    </div>
    <div className="col-md-3 col-lg-3 col-12 footer3">
<h3> Customer Care</h3> <br/>
<p>My account</p>
<p>Discount</p>
<p>Returns</p>
<p>Orders History</p>
<p>Order Tracking</p>
    </div>
    <div className="col-md-3 col-lg-2 col-12 footer4">
<h3>Pages</h3> <br/>
<p>Blog</p>
<p>Browse the Shop</p>
<p>Category</p>
<p>Pre-Built Pages</p>
<p>Visual Composer Elements</p>
<p>WooCommerce Pages</p>
    </div>

</div>
            </div>
        </div>
    )
}

export default Footer;