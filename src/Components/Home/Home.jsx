import React, { useEffect, useState } from 'react';
import './Home.css';

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
      <div className="about-me">
        <div className="Head-About">
            <span className="highlight">Coding</span> &amp;
            <br className="break-line" />
            <span className="highlight">Storytelling</span>:
            <br /> That's what I do!
        </div>
        <div className="Profession">
          <p>Engineering</p>
          <p>Educating</p>
          <p>Entertaining</p>
        </div>
        <div className="My-Thought">
          <span>I turn ideas into reality with the power of software engineering, and I share my stories as a content <br />creator.</span>
        </div>
        <div className="Chat">
          <button className="Chat-Btn button">Let's Chat!</button>
        </div>
      </div>
      <div className="My-Profile">
        <p className="">🎉🎉</p>
        {Deck && <Deck />}
      </div>
    </div>
  );
};

export default Home;
