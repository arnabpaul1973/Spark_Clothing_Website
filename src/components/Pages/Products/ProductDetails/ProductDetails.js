import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {

  let { productId } = useParams();

  const [data, setData] = useState([]);

  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/data?id=${productId}`).then((res) => {
      console.log(res);
      setData(res.data[0]);
    })
  }, [productId]);

  useEffect(() => {
    axios.get(`http://localhost:3000/feedback?id=${productId}`).then((re) => {
      console.log(re);
      setFeedbackData(re.data[0]);
    })
  }, [productId]);

  return(
    <div className="text-center">
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
        </ul>}
      </div>
      {/* <h2>{productId}</h2>
      <h3>{data.category}</h3>
      <img src={data.img} alt="Card image cap" />
      <h2>{feedbachData.comment}</h2> */}
    </div>
  )
}

export default ProductDetails