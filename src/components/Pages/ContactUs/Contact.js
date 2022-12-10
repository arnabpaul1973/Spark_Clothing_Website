import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';

const Contact = () => {

  const [contactUsDetail, setContactUsDetail] = useState([]);

  const [isError , setIsError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/contactData')
      .then((res) => {
        return res.json();
      })
      .then((resInJSON) => {
        setContactUsDetail(resInJSON);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: (values) => {   
      console.log('form submit', values)
      fetch('http://localhost:3000/getInTouchData', {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
    },
  })

    function refreshPage() { 
      window.location. reload(false);
    }
  
  if(isError){
    return (<div className="alert alert-danger">'Some Error Occured! Try again later.'</div>)
  }

  return (
    <div className="contact-wrapper">
      <h1 className="text-center">Get In Touch</h1>
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

        <label>Message:</label>
        <input type="text" name="message" id="message"
          value={formik.values.message} onChange={formik.handleChange} /> <br />

        <button className="btn btn-primary" type="submit" onClick={refreshPage}>Register</button>

      </form>

      {contactUsDetail.map((contact) => {
        return (
          <div key={contact.phone[0]}>
            <h2>Contact Us</h2>
            <div className="flex-container">
              <div><h3>Address - {contact.address}</h3></div>
              <div><h3>Phone - {contact.phone[0]},{contact.phone[1]}</h3></div>
              <div><h3>Email - {contact.email}</h3></div>  
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Contact