import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Card from './Cards/Card';
import './Work.css';

const Work = ({
  heading,
  subHeading
}) => {

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.animated', {
      delay: 200,
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
      interval: 200
    });
  }, []);


  return (
    <div className="Work-Container">
      <div className="Work">
        <div className="Work-Head">
          <span className="Text">{heading}<span>.</span></span><br />
          <span className="Text-description">{subHeading}</span>
        </div>
        <div className="Cards">          <Card 
            src={"./images/Works/educome.png"} 
            gitHub={"https://github.com/Abhinavrajsrivastav/pacifics-path"} 
            name={"Educome"} 
            about={"A platform for engineers."} 
            link={"https://abhinavrajsrivastav.github.io/pacifics-path/"} 
            toolImg={["react.png"]} 
            tech={["React", "GCP", "Gemini 1.5", "Firebase", "MySQL"]}  
            className="animated" 
          />
          <Card 
            src={"./images/Works/AyodhayaDham.png"} 
            gitHub={"https://github.com/Abhinavrajsrivastav/ADHM"} 
            name={"Ayodhya Dham"} 
            about={"Ayodhya Dham, is a tour guide website."} 
            link={"https://ayodhyadham.vercel.app/"} 
            toolImg={["react.png"]} 
            tech={["React", "Google Cloud Console", "JavaScript"]} 
            className="animated" 
          />
          <Card 
            src={"./images/Works/gemini.png"} 
            gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} 
            name={"Gemini AI Clone"} 
            about={"UI and functionality Google Gemini clone"} 
            link={"https://clone-gemini.vercel.app/"} 
            toolImg={["chat-gpt.png", "react.png", "leaf.png"]} 
            tech={["React", "Spring Boot", "API Integration"]} 
            className="animated" 
          />
        </div>
        <div className="view-all-container">
          <Link to="/" className="view-all-link">
          <button className="view-all-btn">
  <span>View All Works</span>
  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
