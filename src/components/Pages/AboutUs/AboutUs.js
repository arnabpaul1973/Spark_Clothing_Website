import React, { useEffect, useState } from "react";

const About = () => {

  const [aboutUsContent, setAboutUsContent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/about-us')
      .then((res) => {
        return res.json();
      })  
      .then((resInJSON) => {
        setAboutUsContent(resInJSON);
      })
  }, []);

  return (
    <div className="about-us-wrapper" style={{ backgroundImage: `url(${'/Assets/images/download2.png'})`}}> 

      <img src={aboutUsContent.aboutUsImage} alt="about-us-img" width={90} height={70} className="d-inline-block align-text-top" />  
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

export default About