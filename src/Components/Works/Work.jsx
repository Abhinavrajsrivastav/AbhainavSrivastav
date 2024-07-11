import React, { useEffect } from 'react';
import Card from './Cards/Card';
import './Work.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

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
      interval: 200 // Add interval to stagger animations
    });
  }, []);


  return (
    <div className="Work-Container">
      <div className="Work">
        <div className="Work-Head">
          <span className="Text">{heading}<span>.</span></span><br />
          <span className="Text-description">{subHeading}</span>
        </div>
        <div className="Cards">
          <Card src={"./images/Works/educome.png"} gitHub={"https://github.com/Abhinavrajsrivastav/pacifics-path"} name={"Educome"} about={"A platform for engineers"} link={"https://abhinavrajsrivastav.github.io/pacifics-path/"} toolImg={["react.png"]} tech={["React", "GCP", "Gemini 1.5", "Firebase","MySql"]}  className="animated" />
          <Card src={"./images/Works/AyodhayaDham.png"} gitHub={"https://github.com/Abhinavrajsrivastav/ADHM"} name={"Ayodhya Dham"} about={"Ayodhya Dham, is a tour guide website."} link={"https://ayodhyadham.vercel.app/"} toolImg={["react.png"]} tech={["React", "Google cloud console", "Javascript"]} className="animated" />
          <Card src={"./images/Works/gemini.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} name={"Gemini Ai Clone"} about={"UI and functionality Google Gemini clone"} link={"https://clone-gemini.vercel.app/"} toolImg={["chat-gpt.png", "react.png", "leaf.png"]} tech={["React", "Spring Boot"]} className="animated" />
        </div>
      </div>
      <Link to="/">
        <button className="cta">
          <span className="Text" style={{}}>View All Works</span>
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
