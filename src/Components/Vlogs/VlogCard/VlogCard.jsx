import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VlogCard.css';

const Card = ({ src, gitHub, name, about, link, vlogImg }) => {
  return (
    <div className="Vlog-card-container">
      <div className="Vlog-card dark:bg-dark bg-lighter">
      <div className="Vlog-Work-Img">
        <img src={src} alt="ExpressIT" className="Vlog-Projects-img" />
      </div>
      <img src={vlogImg} alt="Java" className="Vlog-Tools-img" />
      <div className="Vlog-card-content">
        <span className="Vlog-Project-Name fs-5">{name}</span><br />
        <span style={{ fontSize: '13px' }}>{about}</span>
      </div>
      <div className="Vlog-Links d-flex flex-row justify-content-start gap-2 mt-2">
        {src !== "" && (
          <a
            href={link}
            target="_blank"
            className="btn btn accordion-collapse"
            style={{ border: '0px solid black', backgroundColor: 'rgba(49, 75, 178, 0.1)', color: 'inherit' }}
          >
            <img src="./images/link.png" style={{ height: '10px', width: '10px' }} alt="Link Icon" className="mx-2" />
            View
          </a>
        )}
      </div>
    </div>
    </div>
  );
}

export default Card;
