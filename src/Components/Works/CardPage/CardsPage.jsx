import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardsPage.css';

const Card = ({ 
  src,
  gitHub,
  name,
  about,
  link,
  toolImg,
  tech,
 }) => {
  console.log("Tech array:", tech); // Debugging statement to check the content of the tech array
  return (
    <div className="Page-card dark:bg-dark bg-lighter">
      <div className="Page-Work-Img">
        <img src={src} alt="ExpressIT" className="Page-Projects-img" />
      </div>
      <div className="toolsImg">
        {toolImg.map((img,index) => (
          <img key={index} src={`./images/Tools/${img}`} alt={img} className="Page-Tools-img" />
        ))}
      </div>
      <div className="Page-card-content">
        <span className="Page-Project-Name fs-5">{name}</span><br />
        <span style={{ fontSize: '13px' }}>{about}</span>
      </div>
      <div className="Page-Links d-flex flex-row justify-content-start gap-2 mt-2">
        {link !== "" && (
          <a href={link} target="_blank" className="btn btn-dark border-0" style={{ backgroundColor: 'rgba(49, 75, 178, 0.1)' }}>
            <img src="./images/link.png" style={{ height: '10px', width: '10px' }} alt="Link Icon" className="mx-2" />
            View
          </a>
        )}
        {gitHub !== "" && (
          <a href={gitHub} target="_blank" className="btn btn-dark opacity-5 border-0" style={{ backgroundColor: 'rgba(49, 75, 178, 0.1)' }}>
            <img src="./images/github-logo.png" style={{ height: '16px', width: '16px' }} alt="Link Icon" className="mx-2" />
            Code
          </a>
        )}
      </div>
      {/* <div className="techs">
        {tech.map((techi, index) => (
          <p key={index}>{techi}</p>
        ))}
      </div> */}
    </div>
  );
}

export default Card;
