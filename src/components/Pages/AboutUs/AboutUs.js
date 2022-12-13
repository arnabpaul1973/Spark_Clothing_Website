import React, { useEffect, useState } from "react"; // imported useEffect and useState from react library
import { fetchApi } from "../../../utils/fetchApi";

const AboutUs = () => {

  const [aboutUsContent, setAboutUsContent] = useState([]);  //useState for setting the about us content
  const [isError, setIsError] = useState(false);  //useState for setting error if error is caught 

  //useEffect for fetching the data from our local database , we targeted about-us data from our db
  //The data is stored in setAboutUsContent and the data can be used by using the aboutUsContent 
  //Catch block is included if any any unexpected error occur 
  useEffect(() => {
    fetchApi('http://localhost:3000/about-us')
      .then((res) => {
        setAboutUsContent(res);
      })
      .catch((err) => {
        setIsError(true);
      })
  }, []);

  //If error occur then we will display an alert with the below message
  if (isError) {
    return (<div className="alert alert-danger">Some Error Occured! Please Try again later.</div>)
  }

  //Included a background image to the about us content
  return (
    <div className="about-us-wrapper" style={{ backgroundImage: `url(${'/Assets/images/download2.png'})`}}> 
      <img src="/Assets/images/About Us.png" alt="about-us-img" width={90} height={70} className="d-inline-block align-text-top" />  
      <h2>{aboutUsContent.title}</h2>
      <p>{aboutUsContent.titleContent}</p>
      <h2>{aboutUsContent.history}</h2>
      <p>{aboutUsContent.historyContent}</p> <br />
      <h2>{aboutUsContent.built}</h2>
      <p>{aboutUsContent.builtContent}</p>
      <h2>{aboutUsContent.vision}</h2>
      <p>{aboutUsContent.visionContent}</p>
    </div>
  )
}

export default AboutUs