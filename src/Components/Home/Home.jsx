import React, { useEffect, useState } from 'react';
import './Home.css';
import Work from '../Works/Work';
import OpenSource from '../OpenSource/OpenSource'
import Vlogs from '../Vlogs/Vlogs';
import { Link } from 'react-router-dom';

const Home = () => {
  const [Deck, setDeck] = useState(null);

  useEffect(() => {
    const importDeck = async () => {
      // Dynamic import using the dynamic import() syntax
      const dynamicImport = await import('./skillsCards/DeckCards');
      setDeck(() => dynamicImport.default);
    };

    importDeck();
  }, []);

  return (
    <div className="Home-Container">
      <div className="Home-Head">
        <div className="about-me">
          <div className="Head-About">
            <span className="highlight">Coding</span> &amp;
            <br className="break-line" />
            <span className="highlight">Storytelling</span>:
            <br /> That's what I do!
          </div>
          <div className="Profession">
            <div className="element-1">
              <p>Engineering</p>
              <p>Educating</p>
              <p>Entertaining</p>
            </div>
            <div className="element-2">
              <img src="./images/Astronomy/sun.png" alt="" />
              <img src="./images/Astronomy/planet (1).png" alt="" />
              <img src="./images/Astronomy/black-hole.png" alt="" />
            </div>
          </div>
          <div className="My-Thought">
            <span>I turn ideas into reality with the help of software engineering, and I share my stories as a content creator.</span>
          </div>
         {/* <div className="Coding-Profiles">
  <h2></h2>
  <a href="https://github.com/Abhinavrajsrivastav" target="_blank" rel="noopener noreferrer">
    <button className="Coding-Profile-Button git">
      GitHub
    </button>
  </a>
  <a href="https://leetcode.com/Abhinav254/" target="_blank" rel="noopener noreferrer">
    <button className="Coding-Profile-Button leet">
      Leetcode
    </button>
  </a>
  <a href="https://auth.geeksforgeeks.org/user/abhirajsrivast254" target="_blank" rel="noopener noreferrer">
    <button className="Coding-Profile-Button gfg">
      GFG
    </button>
  </a>
</div> */}
<div className="Chat">
            <Link to="/Contact">
              <button className="Chat-Btn button">Let's Chat!</button>
            </Link>
            <Link to="https://drive.google.com/file/d/1bAnNLnfiY84rpcOteebBBOB2JVLI5k9A/view?usp=drivesdk">
              <button className="Chat-Btn button">My Resume</button>
            </Link>
          </div>
        </div>
        <div className="My-Profile">
          <p className="wooo">🎉🎉</p>
          {Deck && <Deck />}
        </div>
      </div>
      <div className="Home-Body">
        <Work heading={"Feature Works"} subHeading={"Here are some of the projects I've worked on, utilizing a variety of technologies and frameworks."}/>
        <Vlogs heading={"Vlogs"} subHeading={"Here are some of the Vlogs I have written."}/>
        <OpenSource />
      </div>
    </div>
  );
};

export default Home;
