import React from 'react';
import AchivementsCard from './AchivementsCard/AchivementsCard';
import './Achivements.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AchiementData from '../../Data/AchiementData';
import Certifications from './AchivementsCard/Certifications';
import { DiVim } from 'react-icons/di';

const Achivements = () => {
  const { AchivementsData, certificationsData, Hackathons } = AchiementData();
  return (
   <div className="Achivements-Box">
     <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">My Achievements<span>.</span></span><br />
          <span className="Page-Text-description">Here are some of my Achievements,<br /> I Proudly 🩵 Have.</span>
        </div>
        <div className="Page-Cards">
          {AchivementsData.map((data, index) => (
            <AchivementsCard
              key={index}
              src={data.src}
              gitHub={data.gitHub}
              org={data.org}
              name={data.name}
              about={data.about}
              link={data.link}
              techs={data.techs}
            />
          ))}
        </div>
      </div>

      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">Certifications<span>.</span></span><br />
          <span className="Page-Text-description">Here are some of my certifications.</span>
        </div>
        <div className="Page-Cards">
          {certificationsData.map((data, index) => (
            <Certifications
              key={index}
              src={data.src}
              gitHub={data.gitHub}
              org={data.org}
              name={data.name}
              about={data.about}
              link={data.link}
              techs={data.techs}
            />
          ))}
        </div>
      </div>

      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">Hackathons<span>.</span></span><br />
          <span className="Page-Text-description">Here are some of Hackethons, I have Participate.</span>
        </div>
        <div className="Page-Cards">
          {Hackathons.map((data, index) => (
            <Certifications
              key={index}
              src={data.src}
              gitHub={data.gitHub}
              org={data.org}
              name={data.name}
              about={data.about}
              link={data.link}
              techs={data.techs}
            />
          ))}
        </div>
      </div>
    </div>
   </div>

  );
}

export default Achivements;
