import React, { useEffect, useState } from "react"
import axios from "axios";
import ProductsModal from "./ProductsModal/ProductsModal";
import { Link, Outlet } from "react-router-dom";

const Product = () => {

  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => {
        return res.json();
      })
      .then((resInJSON) => {
        setData(resInJSON);
      })
  }, []);

  const handleCategoryAll = (() => {
    axios.get('http://localhost:3000/data').then((res) => {
      setData(res.data);
    })
  })

  const handleCategory = ((category) => {
      axios.get(`http://localhost:3000/data?category=${category}`).then((res) => {
        setData(res.data);
      })
  })

  return (
    <div className="product-wrapper">
      <div className="col-md-3">
        <button className="btn btn-primary" onClick={() => handleCategoryAll('All')}>All</button>
        <button className="btn btn-primary" onClick={() => handleCategory('men')}>Mens</button>
        <button className="btn btn-primary" onClick={() => handleCategory('women')}>Womens</button>
        <button className="btn btn-primary" onClick={() => handleCategory('kid')}>Kids</button>
      </div>

      <div className="col-md-9">
        <div className="row">
          {data.map((values) => {
            const { id, title, img, category } = values;
            return (
                <div className="col-md-4" key={id}>          
                  <div className="card">
                    <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{category}</p>
                      <button className="btn btn-primary" onClick={() => setModalShow(id)}>Feedback</button>
                      <Link to={`product-details/${id}`}>Product Details</Link>
                    </div>
                  </div>
                </div>
            )
          })}
          {modalShow && <ProductsModal
            show={modalShow}
            onHide={() => setModalShow(null)}
            productId={modalShow} />}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Product