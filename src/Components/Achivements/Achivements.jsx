import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import { FaCertificate, FaCode, FaMedal, FaStar, FaTrophy } from 'react-icons/fa';
import AchiementData from '../../Data/AchiementData';
import './Achivements.css';

const Achivements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const achievementsRef = useRef(null);
  const { AchivementsData, certificationsData, Hackathons } = AchiementData();

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  const achievementStats = [
    { icon: <FaCode />, number: "1564+", label: "LeetCode Rating", color: "#FFA116" },
    { icon: <FaTrophy />, number: "900+", label: "Problems Solved", color: "#12c5ca" },
    { icon: <FaStar />, number: "15+", label: "GitHub Stars", color: "#2a62fc" },
    { icon: <FaMedal />, number: "10+", label: "Certifications", color: "#ff6b6b" }
  ];

  return (
    <section className="achievements-section" id="achievements" ref={achievementsRef}>
      <div className="achievements-header">
        <h2 className="achievements-title">
          <span className="title-number">03.</span>
          My <span className="highlight">Achievements</span>
        </h2>
        <p className="achievements-subtitle">
          Milestones and recognitions
        </p>
      </div>

      <div className="achievements-container">
        {/* Achievement Stats */}
        <div className="achievement-stats">
          <div className="stats-grid">
            {achievementStats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-card ${isVisible ? 'animate-stat-card' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming Achievements */}
        <div className="achievement-category">
          <div className="category-header">
            <FaTrophy className="category-icon" />
            <h3 className="category-title">Competitive Programming</h3>
          </div>
          <div className="achievement-grid">
            {AchivementsData.map((data, index) => (
              <div 
                key={index}
                className={`achievement-card ${isVisible ? 'animate-achievement-card' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="achievement-image">
                  <img src={data.src} alt={data.name} />
                  <div className="achievement-overlay">
                    <FaTrophy className="overlay-icon" />
                  </div>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-name">{data.name}</h4>
                  <p className="achievement-description">{data.about}</p>
                  <div className="achievement-techs">
                    {data.techs.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={data.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="achievement-link"
                  >
                    View Achievement
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="achievement-category">
          <div className="category-header">
            <FaCertificate className="category-icon" />
            <h3 className="category-title">Professional Certifications</h3>
          </div>
          <div className="certification-grid">
            {certificationsData.map((data, index) => (
              <div 
                key={index}
                className={`certification-card ${isVisible ? 'animate-certification-card' : ''}`}
                style={{ animationDelay: `${(index + AchivementsData.length + 4) * 0.1}s` }}
              >
                <div className="certification-badge">
                  <img src={data.src} alt={data.name} />
                </div>
                <div className="certification-info">
                  <h4 className="certification-name">{data.name}</h4>
                  <p className="certification-org">{data.org}</p>
                  <p className="certification-description">{data.about}</p>
                  <div className="certification-skills">
                    {data.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-chip">{tech}</span>
                    ))}
                  </div>
                </div>
                <a 
                  href={data.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certification-verify"
                >
                  Verify
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div className="achievement-category">
          <div className="category-header">
            <FaCode className="category-icon" />
            <h3 className="category-title">Hackathon Participations</h3>
          </div>
          <div className="hackathon-grid">
            {Hackathons.map((data, index) => (
              <div 
                key={index}
                className={`hackathon-card ${isVisible ? 'animate-hackathon-card' : ''}`}
                style={{ animationDelay: `${(index + AchivementsData.length + certificationsData.length + 4) * 0.1}s` }}
              >
                <div className="hackathon-banner">
                  <img src={data.src} alt={data.name} />
                  <div className="hackathon-status">
                    <span className="status-badge">Participated</span>
                  </div>
                </div>
                <div className="hackathon-details">
                  <h4 className="hackathon-name">{data.name}</h4>
                  <p className="hackathon-description">{data.about}</p>
                  <div className="hackathon-technologies">
                    {data.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <a 
                  href={data.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certification-verify"
                >
                  Verify
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achivements;
