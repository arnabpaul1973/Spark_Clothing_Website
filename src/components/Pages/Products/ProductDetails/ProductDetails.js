import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../../../../utils/fetchApi";
import ProductsModal from "../ProductsModal/ProductsModal";

const ProductDetails = () => {

  let { productId } = useParams();

  const [data, setData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const [modalShow, setModalShow] = useState(null);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/data?id=${productId}`).then((res) => {
  //     setData(res.data[0]);
  //   })
  //   axios.get(`http://localhost:3000/feedback?productId=${productId}`).then((res) => {
  //     setFeedbackData(res.data[0]);
  //   })
  // }, [productId]);

  useEffect(() => {
    fetchApi(`http://localhost:3000/data?id=${productId}`)
    .then((result) => {
      console.log(result[0]);
      setData(result[0]);
    })
    // .then((result) => {
    //   setData(result[0]);
    // })
    .catch((err) => {
      setIsError(true);
    })

    fetch(`http://localhost:3000/feedback?productId=${productId}`)
    .then((res) => {
      return res.json()
    })
    .then((result) => {
      setFeedbackData(result[0]);
    })
    .catch((err) => {
      setIsError(true);
    })
  }, [productId]);

  if (isError) {
    return (<div className="alert alert-danger">Some Error Occured! Please Try again later.</div>)
  }

  return(
    <div>
      <h1>Product Details</h1>
      <div className="card">
        <img className="card-img-top" src={data.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.category}</h5>
          <p className="card-text">{data.title}</p>
        </div>
        {feedbackData && <ul className="list-group list-group-flush">
          <li className="list-group-item">Feedback : {feedbackData.comment}</li>
          <li className="list-group-item">Given By : {feedbackData.name}</li>
          <li className="list-group-item">Rating : {feedbackData.rate} stars</li>
        </ul>}
        <button className="btn btn-primary" onClick={() => setModalShow(data.id)}>Feedback</button>
      </div>
      {modalShow && <ProductsModal
        show={modalShow}
        onHide={() => setModalShow(null)}
        productId={modalShow} />}
    </div>
  )
}

export default ProductDetails