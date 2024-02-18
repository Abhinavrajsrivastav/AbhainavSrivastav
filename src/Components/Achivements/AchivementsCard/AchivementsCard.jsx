import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AchivementsCard.css';

const AchivementsCard = ({
  src,
  gitHub,
  name,
  about,
  link,
  techs
}) => {
  return (
    <div className="Achive-card dark:bg-dark bg-lighter">
      <div className="Achive-Work-Img">
        <img src={src} alt="ExpressIT" className="Achive-Projects-img" />
        {/* <img src="./images/Tools/java.png" className="Achive-Tools-img" /> */}
      </div>
      <div className="Achive-card-content">
        <span className="Achive-Project-Name fs-5">{name}</span><br />
        <span style={{ fontSize: '13px' }}>{about}</span>
      </div>
      <div className="Achive-Fotter">
        <div className="Achive-techs">
          {techs.map((tech, index) => (
            <span key={index} className="Achive-tech">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AchivementsCard;
