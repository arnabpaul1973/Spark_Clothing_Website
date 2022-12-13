import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Product from './components/Pages/Products/Products';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Contact from './components/Pages/ContactUs/Contact';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/Pages/Products/ProductDetails/ProductDetails';

/* 
Import Hashrouter,Route and Routes from react-router-dom for hash routing 
Added routes for Home,Product,AboutUs and Contact Page
*/

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
        <main data-testid="app-link" className="container mt-5 pt-5">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Product />}/>
          <Route path='/products/product-details/:productId' element={<ProductDetails />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact-us' element={<Contact />}/>     
        </Routes>
        </main> 
      </>
    </HashRouter>
  );
}

export default App;
