import Card from './OS-Card/Card';
import './OpenSource.css';

const OpenSource = () => {
  return (
    <div className="OpenSource-Container">
      <div className="Content">
        <div className="Head">
          <p className="OpenSources-Text">
            Open Source
            <span className="Point">.</span>
            <br />
          </p>
          <span>Here are some Proudly made, Open Source Repositories I've worked on, btw still working...</span>
        </div>
        <div className="Open">
          <Card name={"Core Java and DSA"} about={"This Repo consists all important topics of Core Java. every pont is covered with a coding example."} view={"https://github.com/Abhinavrajsrivastav/Core_Java.git"}/>
          <Card name={"System Design Concepts"} about={"This Repo consists all important topics System Design."} view={"https://github.com/Abhinavrajsrivastav/System-Design.git"}/>
          <Card name={"DSA with Java"} about={"This Repo consists all important topics of data structure and algorithms. every topics is covered with a easy coding example."} view={"https://github.com/Abhinavrajsrivastav/DSA-With-Java.git"}/>
        </div>
        <div className="Btn">
          <a href="https://github.com/Abhinavrajsrivastav" target="_blank" rel="noopener noreferrer" className="view-all-link">
            <button className="view-all-btn">
              <span>View All Repos</span>
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OpenSource;
