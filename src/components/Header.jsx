import './Header.scss'


const Header =()=>{
    return (
<div className='Header'> 
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12  left">
                <div className='leftFirst'>Best Furniture For Your Castle....</div>
                <div className='leftSecond'>New Furniture Collection <br/>
Trends in 2020</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.</p>
<button>Shop Now</button>
            </div>

            
            <div className="col-lg-6 col-md-12 col-sm-12   right">
                <img src={require(".//img/sofa promotional header.png")}
                 alt="sofa" className='sofa' />
            </div>
        </div>
     
 <img src={require(".//img/image 32.png")} alt="" className='absoluteImg' />


    </div>


</div>

    )
}

export default Header;