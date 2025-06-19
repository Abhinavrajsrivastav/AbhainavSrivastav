import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './ExperienceCard.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <div className="company-logo">
          <img src={experience.logo} alt={`${experience.company} logo`} />
        </div>
        <div className="experience-details">
          <h3>{experience.position}</h3>
          <h4>{experience.company}</h4>
          <div className="experience-meta">
            <p><FaClock className="meta-icon" /> {experience.duration}</p>
            <p><FaMapMarkerAlt className="meta-icon" /> {experience.location}</p>
          </div>
        </div>
      </div>
      <div className="experience-card-body">
        <ul>
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="experience-card-footer">
        <div className="skills-container">
          {experience.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
