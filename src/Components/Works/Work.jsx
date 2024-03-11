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
         <Card src={"./images/Works/Cold-pay.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"A music player collections of some best hindi and english musics"} link={"https://healsync.onrender.com/"} toolImg={["react.png"]}/>
         <Card src={"./images/Works/WheatherApp.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Whether app"} about={"A weather application, gives real time weather update of any place"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_javadevelopment-springboot-javascripts-activity-7149425500443017216-ut8D?utm_source=share&utm_medium=member_desktop"}  toolImg={["leaf.png"]}/>
         <Card src={"./images/Works/Movie-Finder.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"An youtube usecase. Efficient and no irrelevent content show"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_springboot-javascripts-java-activity-7155206688197758977-9tIt?utm_source=share&utm_medium=member_desktop"} toolImg={["leaf.png"]}/>
      </div>
      
      </div>
      <Link to="/">
      <button className="cta">
       <span className="Text" style={{}} >View All Works</span>
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
