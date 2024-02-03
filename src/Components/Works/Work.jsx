import React from 'react';
import Card from './Cards/Card';
import './Work.css';

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
    </div>
  );
}

export default Work;
