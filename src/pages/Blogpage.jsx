import './/Blogpage.scss'
import MiniNavbar from '../components/MiniNavbar'
import NavbarTop from '../components/NavbarTop'
import Image from '../components/Image'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'
import { Link } from 'react-router-dom'
import { CgCalendarDates } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";



const Shoplist = () => {
    return (
        <div>
            <MiniNavbar />
            <NavbarTop />

            <div className="container Breadcrumb">
                <div className="title">
                    Blog page
                </div>
                <div className="row">
                    <div className="col-12 breadcrumbItems">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/shoplist">Pages</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Blog page</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="container blogSection">
                <div className="row">
                    <div className="col-lg-9 blogPage">
                        <div className="blogimage">
                            <img src={require("../components/img/blogimage.png")} alt="" />
                        </div>
                        <div className='date'>
                            <span className='Date1'> <FaPencil /> Surf Auxion</span>
                            <span className='Date2'>  <CgCalendarDates />  Aug 09 2020</span>
                        </div>
                        <div className='blognews'>
                            <p className='NewsFirst'>Mauris at orci non vulputate diam tincidunt nec.</p>
                            <p className='NewsSecond'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Velit facilisis quis auctor pretium ipsum, eu rutrum.
                                Condimentum <br /> eu malesuada vitae ultrices in in neque,
                                porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <span className='NewsThird'>Read More</span>

                        </div>

                        <div className="blogPage">

<div className="blogimage">
    <img src={require("../components/img/blogimage2.png")} alt="" />
</div>


<div className='date'>
    <span className='Date1'> <FaPencil /> Surf Auxion</span>
    <span className='Date2'>  <CgCalendarDates />  Aug 09 2020</span>
</div>


<div className='blognews'>
    <p className='NewsFirst'>Aenean vitae in aliquam ultrices lectus. Etiam.</p>
    <p className='NewsSecond'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Velit facilisis quis auctor pretium ipsum, eu rutrum.
        Condimentum <br /> eu malesuada vitae ultrices in in neque,
        porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
    <span className='NewsThird'>Read More</span>

</div>

</div> 
<div className=" blogPage">

<div className="blogimage">
    <img src={require("../components/img/blogimage3.png")} alt="" />
</div>


<div className='date'>
    <span className='Date1'> <FaPencil /> Surf Auxion</span>
    <span className='Date2'>  <CgCalendarDates />  Aug 09 2020</span>
</div>


<div className='blognews'>
    <p className='NewsFirst'>Sit nam congue feugiat nisl, mauris amet nisi. </p>
    <p className='NewsSecond'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Velit facilisis quis auctor pretium ipsum, eu rutrum.
        Condimentum <br /> eu malesuada vitae ultrices in in neque,
        porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
    <span className='NewsThird'>Read More</span>

</div>

</div>
                   
                   
                   
                    </div>

                    <div className="col-lg-3 blogPage2">
<div className="title">
    Search
</div>
<input type="text" placeholder='Search for posts'  />  

 
<div className="title">
    Categories
</div>
<div className='CategoriesLists'>
   <div className='firstList'>
    <p>Hobbies (14)</p>
   <p>Women (21)</p>
   <p>Women (21)</p>
    

   </div>
   <div className='secondList'>
   <p>Women (21)</p>
   <p>Women (21)</p>
   <p>Women (21)</p>
   </div>
  
  

</div>
                    </div>

                </div>
            </div>
            <Image />

            <Footer />
            <FooterBottom />

        </div>
    )
}

export default Shoplist;