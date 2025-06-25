import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './VlogCard/VlogCard';
import './Vlogs.css';

const Work = ({
  heading,
  subHeading
}) => {
  return (
    <div className="Vlog-Work-Container">
      <div className="Vlog-Work">
        <div className="Vlog-Work-Head">
        <span className="Vlog-Text">Featured Works<span>.</span></span><br />
        <span className="Text-description">Here are some of the Works <br/>I have worked at</span>
      </div>
      <div className="Vlog-Cards">
        <Card src={"./images/Vlogs/sd.png"} name={"All About System design"} about={"Understand, the 4 important aspects of designing of an system."} link={"https://medium.com/@abhiraj.srivast254/system-design-what-why-how-when-0bae03b00d27"} vlogImg={"./images/Vlogs/medium.png"}/>
        <Card src={"./images/Vlogs/Educome.png"} name={"Educome"} about={"Educome is a developer-centric platform for engineering aspirants."} link={"https://ai.google.dev/competition/projects/educome"} vlogImg={"./images/Vlogs/google.png"}/>
        <Card src={"./images/Vlogs/Threading.png"} name={"Mutli-Threading"} about={"Understanding concepts of Multi-Threading and Concurrency..."} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_multithreading-java-concurrency-activity-7175072758316347392-9DXo?utm_source=share&utm_medium=member_desktop"} vlogImg={"./images/Vlogs/linkedin.png"}/>
      </div>
      
      </div>
      <a href="https://medium.com/@abhiraj.srivast254/" target="_blank" className="Vlog-cta">
  <span>View All Vlogs</span>
  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>

    </div>
  );
}

export default Work;
