import React from 'react';
import './Card.css';

function Card({ name, about, view }) {
  return (
    <div className="Card-Container">
      <div className="Card-Head">
        <span>{name}</span>
      </div>
      <div className="Card-Body">
        <span>{about}</span>
      </div>
      <div className="Card-Bottom">
        <a
          href={view}
          target="_blank"
          className="btn btn accordion-collapse"
          style={{ border: '0px solid black', backgroundColor: 'rgba(49, 75, 178, 0.1)', color: 'inherit' }}
        >
          <img src="./images/link.png" style={{ height: '10px', width: '10px' }} alt="Link Icon" className="mx-2" />
          View
        </a>
        <div className="Updates">
          <p>updates</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
