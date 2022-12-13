import React, { useEffect, useState } from "react"  //imported useEffect and useState from react library
import { Link } from "react-router-dom";            //imported Link from react-router-dom
import { fetchApi } from "../../../utils/fetchApi";
// import axios from "axios";                          //imported axios

const Product = () => {

  //useState for setting up the data for the products
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false); 

  //useEffect for fetching the data for the products and storing it in setData
  useEffect(() => {
    fetchApi('http://localhost:3000/data')
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
  }, []);

  if (isError) {
    return (<div className="alert alert-danger">Some Error Occured! Please Try again later.</div>)
  }

  //It handles all the products of all the categories
  const handleCategoryAll = (() => {
    fetch('http://localhost:3000/data')
     .then((res) => {
      return res.json();
     })
     .then((resInJSON) => setData(resInJSON))
    // // axios.get('http://localhost:3000/data').then((res) => {
    // //   setData(res.data);
    // })
  })

  //It handles only the category that is passed in the query parameter and according to that displays the products
  const handleCategory = ((category) => {
    if(category !== 'All'){
      fetch(`http://localhost:3000/data?category=${category}`)
     .then((res) => {
      return res.json();
     })
     .then((resInJSON) => setData(resInJSON));
    }
    // axios.get(`http://localhost:3000/data?category=${category}`).then((res) => {
    //   setData(res.data);
    // })
  })

  //Added four buttons for category . All button will display all the items in the product data irrespective of the category .
  //The other three buttons would filter the product data and the display the elements with the same category as the button name .
  //We are using bootstrap cards to display the product data to the users
  //In the card we include a link which links to the respective product details and also displays the feedback if provided by the user .
  return (
    <div className="product-wrapper center-align">
      <div>
        <button data-testid='All' className="btn btn-primary mx-2 my-3" onClick={() => handleCategoryAll('All')}>All</button>
        <button className="btn btn-primary mx-2 my-3" onClick={() => handleCategory('men')}>Mens</button>
        <button className="btn btn-primary mx-2 my-3" onClick={() => handleCategory('women')}>Womens</button>
        <button className="btn btn-primary mx-2 my-3" onClick={() => handleCategory('kid')}>Kids</button>
      </div>

        <div className="row">
          {data.map(({ id, title, img, category, reducedPrice, originalPrice }) => {
            return (
              <div className="col-md-6 text-center" key={id}>
                <div className="card">
                  <img className="card-img-top" src={img} alt={title} />
                  <div className="card-body">
                    <h4 className="card-title">{title} ({category})</h4>
                    <h5 className="card-title">{reducedPrice}</h5>
                    <h5 className="card-title"><s>{originalPrice}</s></h5>
                    <Link to={`product-details/${id}`}>Product Details</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Product