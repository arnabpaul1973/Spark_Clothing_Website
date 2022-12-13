import React from "react";

//Home Page for Spark's Clothing , which has the welcome text for the users
//And a carousel is also displayed using bootstrap
const Home = () => {
  return (
    <div className="text-center home-wrapper">
      <h1>Welcome To Spark Clothing</h1>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Assets/images/download7.png" className="w-100" alt="carousel image 1" height="600"/>
          </div>
          <div className="carousel-item">
            <img src="/Assets/images/download5.png" className="w-100" alt="carousal image 2" height="600" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Home