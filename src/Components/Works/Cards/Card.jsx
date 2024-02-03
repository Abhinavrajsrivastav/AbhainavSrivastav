import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="Work-Img">
        <img src="./images/download (1).jpeg" alt="ExpressIT" />
      </div>
      <div className="card-content">
        <span>ExpressIT</span><br />
        <span>Connect With the Universe! Everyone can hear or talk. Deaf and dumb people have difficulties communicating with society.</span>
        <span>Laam Hara</span>
      </div>
    </div>
  );
}

export default Card;
