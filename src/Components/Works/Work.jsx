import React from 'react';
import Card from './Cards/Card';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
  return (
    <div className="Work-Container">
      <div className="Work">
        <div className="Work-Head">
        <span className="Text">Featured Work<span>.</span></span><br />
        <span className="Text-description">Here are some of the projects I've worked on, utilizing a variety of technologies and frameworks.</span>
      </div>
      <div className="Cards">
        <Card />
        <Card />
        <Card />
      </div>
      
      </div>
      <button className="cta">
       <span className="Text" style={{}} >View All Talks</span>
       <svg width="15px" height="10px" viewBox="0 0 13 10">
       <path d="M1,5 L11,5"></path>
       <polyline points="8 1 12 5 8 9"></polyline>
       </svg>
      </button>
    </div>
  );
}

export default Work;
