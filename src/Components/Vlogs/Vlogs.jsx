import React from 'react';
import Card from './VlogCard/VlogCard';
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
        <span className="Vlog-Text">Blogs<span>.</span></span><br />
        <span className="Vlog-Text-description">Here are some of the Blogs I have written</span>
      </div>
      <div className="Vlog-Cards">
        <Card src={"https://www.crio.do/blog/content/images/2023/08/A-Comprehensive-Guide-to-System-Design.png"} name={"All About System design"} about={"Understand, the 4 important aspects of designing of an system."} link={"https://medium.com/@abhiraj.srivast254/system-design-what-why-how-when-0bae03b00d27"} vlogImg={"./images/Vlogs/medium.png"}/>
        <Card src={"https://static.vecteezy.com/system/resources/previews/027/543/050/original/india-russia-rocket-to-moon-mission-chandrayaan-3-rocket-india-luna-25-rocket-russia-vector.jpg"} name={"Chadrayaan-3"} about={"Chandrayaan-3 is India’s Third moon Mission by which..."} link={"https://qr.ae/ps7o2C"} vlogImg={"./images/Vlogs/quara.png"}/>
        <Card src={"./images/Vlogs/Threading.png"} name={"Mutli-Threading"} about={"Understanding concepts of Multi-Threading and Concurrency..."} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_multithreading-java-concurrency-activity-7175072758316347392-9DXo?utm_source=share&utm_medium=member_desktop"} vlogImg={"./images/Vlogs/linkedin.png"}/>
      </div>
      
      </div>
      <button className="Vlog-cta">
       <span className="Vlog-Text" style={{color: 'inherit'}} ><a href="https://medium.com/@abhiraj.srivast254/" style={{color: 'inherit', textDecoration: 'inherit'}}>View All Vlogs</a></span>
       <svg width="15px" height="10px" viewBox="0 0 13 10">
       <path d="M1,5 L11,5"></path>
       <polyline points="8 1 12 5 8 9"></polyline>
       </svg>
      </button>
    </div>
  );
}

export default Work;
