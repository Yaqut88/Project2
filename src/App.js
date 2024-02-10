import './App.scss';

import './App.scss'
import {Route, Routes} from 'react-router-dom';

import {About} from './pages/About';
import Blogpage from './pages/Blogpage';
import ProductDetails from './pages/ProductDetails';
import Shoplist from './pages/Shoplist';
import Contact from './pages/Contact';
import {SingleBlog} from './pages/SingleBlog';
import Home from './pages/Home';





function App() {

    return (
     <Routes>
        <Route path="/" element={<Home />}   /> 
        <Route path="/about" element={<About />}  />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/shoplist" element={<Shoplist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleblog" element={<SingleBlog />} />
       

     </Routes>
    )
}

export default App;