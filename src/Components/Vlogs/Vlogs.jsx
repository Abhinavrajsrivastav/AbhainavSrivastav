import React from 'react';
import Card from '../Works/Cards/Card';
import './Vlogs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Work = ({
  heading,
  subHeading
}) => {
  return (
    <div className="Vlog-Work-Container">
      <div className="Vlog-Work">
        <div className="Vlog-Work-Head">
        <span className="Vlog-Text">{heading}<span>.</span></span><br />
        <span className="Vlog-Text-description">{subHeading}</span>
      </div>
      <div className="Vlog-Cards"Vlog->
        <Card src={"./images/Vlogs/Vlogs-1.png"} gitHub={""} name={"Parcing in programming"} about={"Parcing in programming is process of analyzing and interpreting structured or semi-structured data"} link={""}/>
        <Card src={"./images/Works/WheatherApp.png"} gitHub={""} name={"Whether app"} about={"A whether application, gives real time weather update of any place"} link={""}/>
        <Card src={"./images/Works/Movie-Finder.png"} gitHub={""} name={"Movie Finder"} about={"An youtube usecase, this app help user to find any movie available on yt. Efficient and no irrelevent content show"} link={""}/>
      </div>
      
      </div>
      <Link to="/WorkPage">
      <button className="Vlog-cta">
       <span className="Vlog-Text" style={{}} >View All Talks</span>
       <svg width="15px" height="10px" viewBox="0 0 13 10">
       <path d="M1,5 L11,5"></path>
       <polyline points="8 1 12 5 8 9"></polyline>
       </svg>
      </button>
      </Link>
    </div>
  );
}

export default Work;
