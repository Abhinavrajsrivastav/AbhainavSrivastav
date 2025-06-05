import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import OpenSource from '../OpenSource/OpenSource';
import Vlogs from '../Vlogs/Vlogs';
import Work from '../Works/Work';
import './Home.css';

const Home = () => {
  const [Deck, setDeck] = useState(null);

  useEffect(() => {
    const importDeck = async () => {
      const dynamicImport = await import('./skillsCards/DeckCards');
      setDeck(() => dynamicImport.default);
    };

    importDeck();

    const sr = ScrollReveal();
    sr.reveal('.about-me', {
      delay: 100,
      duration: 1000,
      origin: 'bottom',
      distance: '30px',
      easing: 'ease-in-out',
    });

    sr.reveal('.Home-Body', {
      delay: 100,
      duration: 1000,
      origin: 'bottom',
      distance: '30px',
      easing: 'ease-in-out',
    });

  }, []);

  return (
    <div className="Home-Container">

      <div className="Home-Head">
        <div className="about-me">
          <div className="Head-About">
            <span className="highlight">Coding</span> &amp;
            <br className="break-line" />
            <span className="highlight">Storytelling</span>
            <br /> That's what I do!
          </div>
          <div className="Profession">
            <div className="element-1">
              <p>Engineering</p>
              <p>Educating</p>
              <p>Entertaining</p>
            </div>
          </div>
          <div className="My-Thought">
            <span>I turn ideas into reality with the help of software engineering, and I share my stories as a content creator.</span>
          </div>
<div className="Chat">
            <Link to="/Contact">
              <button className="Chat-Btn button">Let's Chat!</button>
            </Link>
            <Link to="https://drive.google.com/file/d/1kc51C6pbCtJSIstJWkakNYWhzGp2dLWZ/view?usp=sharing">
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
