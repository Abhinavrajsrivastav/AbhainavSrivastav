import React from 'react';
import Card from './OS-Card/Card';
import './OpenSource.css';

const OpenSource = () => {
  return (
    <div className="OpenSource-Container">
      <div className="Content">
        <div className="Head">
             <span className="Text">Open Source<span className="Point">.</span><br /></span>
             <span>Here are some of the popular Open Source Repositories I've worked on.</span>
        </div>
        <div className="Open">
           <Card />
            <Card />
            <Card />
        </div>
      </div>
      <div className="Btn">
       <button className="cta">
       <span className="Text" style={{}} >View All Repos</span>
       <svg width="15px" height="10px" viewBox="0 0 13 10">
       <path d="M1,5 L11,5"></path>
       <polyline points="8 1 12 5 8 9"></polyline>
       </svg>
      </button>
      </div>
    </div>
  )
}

export default OpenSource;
