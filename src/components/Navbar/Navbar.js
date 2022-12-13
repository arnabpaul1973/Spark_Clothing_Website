import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  // Bootstrap navbar is implemented and also included various bootstrap classes for the navbar
  // We have used Link from react-router-dom
  // Added the Spark clothing logo
  // Then added the respective pages using the link and also included the image for the pages 
    <>
      <div className="navbar-wrapper">
        <nav className="navbar border border-dark navbar-expand-lg navbar-custom shadow-sm "> 
          <div className="container">
            <Link className="navbar-brand fw-bold " to="/">
              <img src="/Assets/images/LOGO.jpg" alt="Spark Clothing Logo" width={30} height={30} className="d-inline-block align-text-top" />
              SPARK CLOTHING SHOP
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                  <img src="/Assets/icons/Home.png" alt="home-logo" width={30} height={30} className="d-inline-block align-text-top" />
                    Home
                  </Link>   
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/products">
                    <img src="/Assets/icons/Product.png" alt="product-logo" width={30} height={30} className="d-inline-block align-text-top" />
                      Products
                    </Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about-us">
                  <img src="/Assets/icons/AboutUs.png" alt="about-logo" width={30} height={30} className="d-inline-block align-text-top" />
                    About Us
                  </Link>    
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contact-us">
                  <img src="/Assets/icons/ContactUs.png" alt="contact-logo" width={30} height={30} className="d-inline-block align-text-top" />
                    Contact Us
                  </Link> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
   </>
  )
}

export default Navbar