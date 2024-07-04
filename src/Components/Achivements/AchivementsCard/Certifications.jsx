import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Certifications.css';

const Certifications = ({
  src,
  gitHub,
  name,
  about,
  link,
  techs
}) => {
  return (
    <div className="Certificate-card dark:bg-dark bg-lighter">
      <div className="Certificate-Work-Img">
        {/* <img src={src} alt="ExpressIT" className="Achive-Projects-img" /> */}
        {/* <img src="./images/Tools/java.png" className="Achive-Tools-img" /> */}
      </div>
      <div className="Certificate-card-content">
        <span className="Certificate-Project-Name fs-5">{name}</span><br />
        <span >{about}</span>
      </div>
      <div className="Certificate-Fotter">
        {/* <div className="Achive-techs">
          {techs.map((tech, index) => (
            <span key={index} className="Achive-tech">{tech}</span>
          ))}
        </div> */}
      </div>
       <div className="Certificate-Link">
        {link !== "" && (
          <a
            href={link}
            target="_blank"
            className=""
          >
           View Certificate
          </a>
        )}
      </div>
    </div>
  );
}

export default Certifications;
