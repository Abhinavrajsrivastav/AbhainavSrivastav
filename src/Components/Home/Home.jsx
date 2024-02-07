import React, { useEffect, useState } from 'react';
import './Home.css';
import Work from '../Works/Work';
import OpenSource from '../OpenSource/OpenSource'

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
            <img src="./images/Astronomy/solar-system.png" alt="" />
            <img src="./images/Astronomy/sun.png" alt="" />
            <img src="./images/Astronomy/planet (1).png" alt="" />
            <img src="./images/Astronomy/black-hole.png" alt="" />
            {/* <element className="Astronomy"></element> */}
          </div>
        </div>
        <div className="My-Thought">
          <span>I turn ideas into reality with the help of software engineering, and I share my stories as a content <br />creator.</span>
        </div>
        <div className="Chat">
          <button className="Chat-Btn button">Let's Chat!</button>
        </div>
      </div>
      <div className="My-Profile">
        <p className="wooo">🎉🎉</p>
        {Deck && <Deck />}
      </div>
      </div>
    <div classNane="Home-Body">
    <Work />
    <Work />
    <OpenSource />
    </div>
    </div>
  );
};

export default Home;
