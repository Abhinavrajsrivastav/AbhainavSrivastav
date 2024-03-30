import React from 'react';
import AchivementsCard from './AchivementsCard/AchivementsCard';
import './Achivements.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AchiementData from '../../Data/AchiementData';

const Achivements = () => {
  const { AchivementsData, certificationsData } = AchiementData();
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">My Achievements<span>.</span></span><br />
          <span className="Page-Text-description">Here are some of my Achievements,<br /> I Proudly 🩵 have.</span>
        </div>
        <div className="Page-Cards">
          {AchivementsData.map((data, index) => (
            <AchivementsCard
              key={index}
              src={data.src}
              gitHub={data.gitHub}
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
            <AchivementsCard
              key={index}
              src={data.src}
              gitHub={data.gitHub}
              name={data.name}
              about={data.about}
              link={data.link}
              techs={data.techs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achivements;
