import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import NavbarTop from '../components/NavbarTop'
import Image from '../components/Image'
import FooterBottom from '../components/FooterBottom'
import Footer from '../components/Footer'
import './Contact.scss'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <MiniNavbar/>
        <NavbarTop/>
 
        <div className="container Breadcrumb">
                <div className="title">
                    My Account
                </div>
                <div className="row">
                    <div className="col-12 breadcrumbItems">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/shoplist">Pages</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">My account</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>


<div className="container mt-5 mb-5 contactSection">
    <div className="row">
        <div className="col-lg-12 contact">
       
    <div className="contactTitle">
        <p>Login</p>
        <span>Please login using account detail below.</span>
    </div>

    <form action="#" method='post'>
<label htmlFor=""></label>
<input type="email" placeholder='Email Address' />
  <br /> <br />
<label htmlFor=""></label>
<input type="password" placeholder='Password'/>
<br /> <br />
<span className='spanFirst'>Forgot your password? </span>
<br /> <br />
<button type="submit">Sign in</button> <br /> <br />
<span className='spanSecond'>Don’t have an Account?Create account</span>
    </form>

        </div>
    </div>
</div>



        <Image/>
        <Footer/>
        <FooterBottom/>
    </div>
  )
}

export default Contact;