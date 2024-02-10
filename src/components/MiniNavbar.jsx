
import "./MiniNavbar.scss";
import 
  {FaEnvelope, FaPhoneVolume } from "react-icons/fa6";
  import { IoPersonOutline } from "react-icons/io5";
  import { CiHeart } from "react-icons/ci";






const MiniNavbar =()=> {
    return (
      
      <div className="MiniNavbar">
        <div className="container">

<div className="row">
<div className=" col-lg-5 col-md-6 col-12 col-sm-12 left">
 <span>  <FaEnvelope/>  yaqutquliyeva88@gmail.com</span>
 <span> <FaPhoneVolume />  (+99455)5358121</span>
 </div>
 <div className="col-lg-7 col-md-6 col-12 col-sm-12 right">
   <ul>
     <li>English</li>
     <li>USD</li>
     <li>Login <IoPersonOutline/> </li>
     <li>Wishlist <CiHeart/>  </li>
     <li></li>
   </ul>
 </div>
 
</div>
      </div>
      </div>
    )
  }


export default MiniNavbar;