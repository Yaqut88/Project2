import './FooterBottom.scss';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle,
    AiFillInstagram } from "react-icons/ai";



const FooterBottom =()=> {
    return (
<div className="container-fluid">
<div className="row  footerBottom">
    <div className="footerEnd col-9" >
       <span> ©Webecy - All Rights Reserved </span>
        </div>
    <div className="footerIcons col-3">
        <FaFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
    </div>
    
</div>
</div>
    )
}

export default FooterBottom;