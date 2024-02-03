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
      <button className="btn btn-dark border-0 " style={{ backgroundColor: '#24ad9d' }}>View All Projects</button>
      </div>
    </div>
  );
}

export default Work;
