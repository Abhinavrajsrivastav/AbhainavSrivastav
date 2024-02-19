import React from 'react';
import Card from './OS-Card/Card';
import './OpenSource.css';

const OpenSource = () => {
  return (
    <div className="OpenSource-Container">
      <div className="Content">
        <div className="Head">
          <span className="Text">
            Open Source
            <span className="Point">.</span>
            <br />
          </span>
          <span>Here are some of the popular Open Source Repositories I've worked on.</span>
        </div>
        <div className="Open">
          <Card name={"Core Java and DSA"} about={"This Repo consists all important topics of Core Java. every pont is covered with a coding example."} view={"https://github.com/Abhinavrajsrivastav/Core_Java.git"}/>
          <Card name={"System Design Concepts"} about={"This Repo consists all important topics System Design."} view={"https://github.com/Abhinavrajsrivastav/System-Design.git"}/>
          <Card name={"DSA with Java"} about={"This Repo consists all important topics of data structure and algorithms. every topics is covered with a easy coding example."} view={"https://github.com/Abhinavrajsrivastav/DSA-With-Java.git"}/>
        </div>
      </div>
      <div className="Btn">
        <button className="cta">
          <span className="Text" style={{ color: 'inherit', cursor: 'not-allowed' }}>
            <a href="https://github.com/Abhinavrajsrivastav" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              View All Repos
            </a>
          </span>

          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default OpenSource;
