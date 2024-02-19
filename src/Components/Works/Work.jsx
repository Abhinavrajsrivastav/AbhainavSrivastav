import React from 'react';
import Card from './Cards/Card';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Work = ({
  heading,
  subHeading
}) => {
  return (
    <div className="Work-Container">
      <div className="Work">
        <div className="Work-Head">
        <span className="Text">{heading}<span>.</span></span><br />
        <span className="Text-description">{subHeading}</span>
      </div>
      <div className="Cards">
        <Card src={"./images/Works/Cold-pay.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"A musics player collections of some best hindi and english musics"} link={""}/>
        <Card src={"./images/Works/WheatherApp.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Whether app"} about={"A whether application, gives real time weather update of any place"} link={""}/>
        <Card src={"./images/Works/Movie-Finder.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"An youtube usecase, this app help user to find any movie available on yt. Efficient and no irrelevent content show"} link={""}/>
      </div>
      
      </div>
      <Link to="/">
      <button className="cta">
       <span className="Text" style={{}} >View All Talks</span>
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
