import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    //     <div className="container">
    //       <a className="navbar-brand fw-bold" href="#" />
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarCollapse">
    //         <ul className="navbar-nav py-2">

    //           <li className="nav-item active">
    //             <a className="nav-link" href="#">
    //               <img 
    //                 src={logo}
    //                 width="100" 
    //                 height="100" 
    //                 className="d-inline-block align-top" 
    //                 alt="Image" />  
    //             </a>
    //           </li>

    //           <li className="nav-item py-2">
    //             <Link className="nav-link active" aria-current="page" to="/">
    //                <img src={homeIcon} alt="home-logo" width={30} height={30} className="d-inline-block align-text-top" />
    //                  Home
    //                </Link> 
    //           </li>

    //           <li className="nav-item py-2">
    //           <Link className="nav-link active" aria-current="page" to="/products">
    //                  <img src={productIcon} alt="product" width={30} height={30} className="d-inline-block align-text-top" />
    //                    Products
    //                  </Link>  
    //           </li>

    //           <li className="nav-item py-2">
    //           <Link className="nav-link active" aria-current="page" to="/about-us">
    //                <img src={aboutusIcon} alt="" width={30} height={30} className="d-inline-block align-text-top" />
    //                  About Us
    //                </Link> 
    //           </li>

    //           <li className="nav-item py-2">
    //           <Link className="nav-link active" aria-current="page" to="/contact-us">
    //                <img src={contactUsIcon} alt="" width={30} height={30} className="d-inline-block align-text-top" />
    //                  Contact Us
    //                </Link> 
    //           </li>

    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <>
      <div className="navbar-wrapper">
        <nav className="navbar border border-dark navbar-expand-lg navbar-custom shadow-sm ">
          <div className="container">

            <Link className="navbar-brand fw-bold " to="/">
              <img src="/Assets/images/LOGO.jpg" alt="" width={30} height={30} className="d-inline-block align-text-top" />
              SPARK CLOTHING SHOP
            </Link>
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