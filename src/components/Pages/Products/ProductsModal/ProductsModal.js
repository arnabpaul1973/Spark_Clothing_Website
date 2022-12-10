import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

const ProductsModal = (props) => {

  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(true)

  useEffect(() => {
        
    fetch('http://localhost:3000/feedback').then(res => res.json()).then((val) =>{
        setIsAlreadySubmitted(!!val.find(feedback => feedback.productId === props.productId))
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      comment: ''
    },
    onSubmit: (values) => {
      console.log('form submit', values)
      fetch(' http://localhost:3000/feedback', {
        method: "POST",
        body: JSON.stringify({ ...values, productId: props.productId }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
    },
  })
  console.log(isAlreadySubmitted,props);

  function refreshPage() { 
    window.location. reload(false);
  }

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
          <input type="text" name="name" id="name"
            value={formik.values.name} onChange={formik.handleChange} /> <br />

          <label>E-mail:</label>
          <input type="email" name="email" id="email"
            value={formik.values.email} onChange={formik.handleChange} /> <br />

          <label>Phone:</label>
          <input type="text" name="phone" id="phone"
            value={formik.values.phone} onChange={formik.handleChange} /> <br />

          <label>Comment:</label>
          <input type="text-area" name="comment" id="comment"
            value={formik.values.comment} onChange={formik.handleChange} /> <br />

          <button className="btn btn-primary" type="submit" onClick={refreshPage}>Submit</button>
        </form>
      </Modal.Body> : <div>Already submitted</div>}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProductsModal