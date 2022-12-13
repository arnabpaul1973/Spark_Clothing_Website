import React, { useEffect, useState } from "react";  // imported useEffect and useState from react library
import { useFormik } from 'formik';  // imported useFormik from formik package for the form

const Contact = () => {

  const [contactUsDetail, setContactUsDetail] = useState([]);  //useState for setting the contact us content
  const [isError, setIsError] = useState(false);  //useState for setting error if error is caught 

  //useEffect for fetching the data from our local database , we targeted contact -us data from our db
  //The data is stored in setContactUsDetail and the data can be used by using the contactUsDetail 
  //Catch block is included if any any unexpected error occur 
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

  //useFormik for submitting the form data to the local backend
  //And also validating the fields in the form
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: (values, {resetForm}) => {
      console.log('form submit', values)
      fetch('http://localhost:3000/getInTouchData', {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      resetForm({values: ""})
    }
    // validate:(values) =>{
    //   let errors = {};
    //   if(!values.name){
    //     errors.name = "Name Rquired"
    //   }
    //   if(!values.email){
    //     errors.email = "Email Rquired"
    //   }
    //   if(!values.phone){
    //     errors.phone = "Phone number Rquired"
    //   }
    //   return errors;
    // }
  })

  //If error occur then we will display an alert with the below message
  if (isError) {
    return (<div className="alert alert-danger">Some Error Occured! Please Try again later.</div>)
  }

  //Get In Touch form takes the users name,e-mail,phone number and the message the user wants to convey
  //In the end the contact detail for Spark Clothing is displayed , by fetching the data from our local db (Address,Phone no. and E-mail)
  return (
    <div className="contact-wrapper">
      <h1 className="text-center">Get In Touch</h1>
      <form autoComplete="off" onSubmit={formik.handleSubmit} className="form-container">
        <label>Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter name" className='form-control'
          value={formik.values.name} onChange={formik.handleChange} /> <br />

        <label>E-mail:</label>
        <input type="email" name="email" id="email" placeholder="Enter mail" className='form-control'
          value={formik.values.email} onChange={formik.handleChange} /> <br />

        <label>Phone:</label>
        <input type="text" name="phone" id="phone" placeholder="Enter phone number" className='form-control'
          value={formik.values.phone} onChange={formik.handleChange} /> <br />

        <label>Message:</label>
        <input type="text" name="message" id="message" placeholder="Enter message" className='form-control'
          value={formik.values.message} onChange={formik.handleChange} /> <br />

        <button data-testid="submitBtn" className="btn btn-primary" type="submit" >Register</button>
      </form>
      <hr />
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