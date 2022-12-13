import Button from 'react-bootstrap/Button';  //imported Button from react-bootstrap
import Modal from 'react-bootstrap/Modal';    //imported Modal from react-bootstrap
import { useFormik } from 'formik';           //imported useFormik from formik 
import { useEffect, useState } from 'react';  //imported useEffect and useState from react

const ProductsModal = (props) => {

  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(true)

  //Fetching feedback data given by the user . And after fetching the data we validate the product id
  useEffect(() => {    
    fetch('http://localhost:3000/feedback')
      .then(res => res.json())
      .then((val) =>{
      setIsAlreadySubmitted(!!val.find(feedback => feedback.productId === props.productId))
      })
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      comment: '',
      rate: ''
    },
    onSubmit: (values, {resetForm}) => {
      console.log('form submit', values)
      fetch(' http://localhost:3000/feedback', {
        method: "POST",
        body: JSON.stringify({ ...values, productId: props.productId }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      resetForm({values: ""})
  //   },
  //   validate:(values) =>{
  //     let errors = {};
  //     if(!values.name){
  //       errors.name = "Name Rquired"
  //     }
  //     if(!values.email){
  //       errors.email = "Email Rquired"
  //     }
  //     if(!values.phone){
  //       errors.phone = "Phone number Rquired"
  //     }
  //     if(!values.comment){
  //       errors.comment = "Comment Rquired"
  //     }
  //     if(!values.rate){
  //       errors.rate = "Rate Rquired"
  //     }
  //     return errors;
    }
  })

  // function refreshPage() { 
  //   window.location.reload(false);
  // }

  return (
    <Modal
      key={props.productId}
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Feedback
        </Modal.Title>
      </Modal.Header>
      {!isAlreadySubmitted ? <Modal.Body>
        <form autoComplete="off" onSubmit={formik.handleSubmit} className="form-container">
          <label>Name:</label>
          <input type="text" name="name" id="name" className='form-control'
            value={formik.values.name} onChange={formik.handleChange} /> <br />

          <label>E-mail:</label>
          <input type="email" name="email" id="email" className='form-control'
            value={formik.values.email} onChange={formik.handleChange} /> <br />

          <label>Phone:</label>
          <input type="text" name="phone" id="phone" className='form-control'
            value={formik.values.phone} onChange={formik.handleChange} /> <br />

          <label>Comment:</label>
          <input type="text-area" name="comment" id="comment" className='form-control'
            value={formik.values.comment} onChange={formik.handleChange} /> <br />

          <input type="radio" id="star5" name="rate" defaultValue={5} onChange={formik.handleChange} />
            <label htmlFor="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" defaultValue={4} onChange={formik.handleChange} />
            <label htmlFor="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" defaultValue={3} onChange={formik.handleChange} />
            <label htmlFor="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" defaultValue={2} onChange={formik.handleChange} />
            <label htmlFor="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" defaultValue={1} onChange={formik.handleChange} />
            <label htmlFor="star1" title="text">
              1 star
            </label>

          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </Modal.Body> : <div>Already submitted</div>}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductsModal