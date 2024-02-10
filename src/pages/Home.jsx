import Header from "../components/Header";
import MiniNavbar from "../components/MiniNavbar";
import NavbarTop from "../components/NavbarTop"
import Section1 from "../components/Section1"
import LatestProducts from "../components/LatestProducts"
import Shopex from "../components/Shopex"
import Section2 from "../components/Section2"
import Products from "../components/Products"
import Discount from "../components/Discount"
import Categories from "../components/Categories"
import Blog from "../components/Blog"
import Section3 from "../components/Section3"
import Image from "../components/Image"
import Footer from "../components/Footer"
import FooterBottom from "../components/FooterBottom"




const Home = () => {
  return (
    <div>

    <MiniNavbar />
    <NavbarTop />
    <Header />
    <Section1/>
    <LatestProducts/>
    <Shopex/>
    <Section2/>
   <Products/>
   <Discount/>
   <Categories/>
   <Blog/>
   <Section3/>
   <Image/>
    <Footer />
    <FooterBottom/>
 

</div>

  )
}

export default Home;