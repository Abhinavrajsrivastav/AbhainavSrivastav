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
       <div className="Links d-flex flex-row justify-content-start gap-2 mt-2">
        {link !== "" && (
          <a
            href={link}
            target="_blank"
            className="btn btn accordion-collapse"
            style={{ border: '0px solid black', backgroundColor: 'rgba(49, 75, 178, 0.1)', color: 'inherit' }}
          >
            {/* <img src="./images/link.png" style={{ height: '10px', width: '10px' }} alt="Link Icon" className="mx-2"   /> */}
            Pow
          </a>
        )}
      </div>
    </div>
  );
}

export default AchivementsCard;
