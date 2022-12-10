import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Product from './components/Pages/Products/Products';
import About from './components/Pages/AboutUs/AboutUs';
import Contact from './components/Pages/ContactUs/Contact';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/Pages/Products/ProductDetails/ProductDetails';

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
        <main className="container mt-5 pt-5">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Product />}>
            <Route path='product-details/:productId' element={<ProductDetails />}/>
          </Route>
          <Route path='/about-us' element={<About />}/>
          <Route path='/contact-us' element={<Contact />}/>     
        </Routes>
        </main> 
      </>
    </HashRouter>
  );
}

export default App;
