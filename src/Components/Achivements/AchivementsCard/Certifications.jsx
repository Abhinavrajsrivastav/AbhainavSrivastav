import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Certifications.css';

const Certifications = ({
  src,
  gitHub,
  org,
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
        <div className='about-org'>
        <span className="Certificate-Project-Name">{name}</span>
        <span className='org'>{org}</span>
        </div>
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
