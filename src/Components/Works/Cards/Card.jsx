import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const Card = ({ src, gitHub, name, about, link }) => {
  return (
    <div className="card dark:bg-dark bg-lighter">
      <div className="Work-Img">
        <img src={src} alt="ExpressIT" className="Projects-img" />
        <img src="./images/Tools/java.png" alt="Java" className="Tools-img" />
      </div>
      <div className="card-content">
        <span className="Project-Name fs-5">{name}</span><br />
        <span style={{ fontSize: '13px' }}>{about}</span>
      </div>
      <div className="Links d-flex flex-row justify-content-start gap-2 mt-2">
        {src !== "" && (
          <a
            href={link}
            target="_blank"
            className="btn btn accordion-collapse"
            style={{ border: '0px solid black', backgroundColor: '#082e64b8' }}
          >
            <img src="./images/link.png" style={{ height: '10px', width: '10px' }} alt="Link Icon" className="mx-2" />
            View
          </a>
        )}
        {gitHub !== "" && (
          <a
            href={gitHub}
            // target="_blank"
            className="btn btn bg  opacity-5 accordion-collapse"
            style={{ border: '0px solid black',  backgroundColor: '#082e64b8'}}
          >
            <img src="./images/github-logo.png" style={{ height: '16px', width: '16px' }} alt="GitHub Icon" className="mx-2" />
            Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
