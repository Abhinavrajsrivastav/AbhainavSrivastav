import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaCode, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      company: 'Ninjacart',
      logo: '/images/Experience/n.png',
      position: 'Software Development Engineer Intern',
      duration: 'April 2025 - June 2025',
      period: '3 months',
      location: 'Bengaluru, Karnataka, India',
      type: 'On-site',
      status: 'Current',
      description: [
        'Architected a high-performance, Multi-tenant event-driven system with Apache Kafka for real-time data streaming and processing.',
        'Implementing innovative deduplication strategies using Cuckoo Filters for efficient data handling.',
        'Built a secure multi-tenant system with realm-based data isolation and AES-256 encryption for sensitive financial data.',
        'Integrating with Spring AI\'s Model Context Protocol (55+ MCP Tools) and Server-Sent Events (SSE) for AI model communication.',
        'Optimized performance through Redis caching, Java 21 Virtual Threads, adaptive batch processing, and database pooling.'
      ],
      skills: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'AES-256', 'Microservices', 'Multi-tenant Architecture'],
      achievements: ['Real-time data processing', 'Performance optimization', 'Security implementation']
    },
    {
      id: 2,
      company: 'Sopra Steria',
      logo: '/images/Experience/images.jpg',
      position: 'Software Development Externship',
      duration: 'October 2024 - November 2024',
      period: '2 months',
      location: 'Noida, Uttar Pradesh, India',
      type: 'Hybrid',
      status: 'Completed',
      description: [
        'Built & deployed an interview dashboard with real-time video conferencing and interview management features.',
        'Backend: Developed backend APIs for creating, ending, and joining a meeting using Java and Spring Boot.',
        'Frontend: Designed a responsive interface using React.js and HTML/CSS.',
        'Database: Store meeting users data using MySQL and user signup/login with Google Firebase.'
      ],
      skills: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Firebase', 'HTML', 'CSS', 'Video Conferencing'],
      achievements: ['Full-stack development', 'Real-time features', 'Database design']
    },
    {
      id: 3,
      company: 'Google',
      logo: '/images/Experience/image.png',
      position: 'Gemini API Developer Competition',
      duration: 'June 2024 - August 2024',
      period: '3 months',
      location: 'Remote',
      type: 'Competition',
      status: 'Completed',
      description: [
        'Designed and developed Educome, an interactive platform aimed at enhancing educational experiences using generative AI (Google\'s Gemini).',
        'Utilized Google\'s Gemini API to integrate intelligent features such as Projects Search, Book Search, developer match, developments rating & ranking, and Learn with Generative AI.',
        'Frontend: Created responsive UI with React.js and HTML/CSS.',
        'Database: Used MySQL database for user\'s data management and Google\'s Firebase for user signup/login/logout.'
      ],
      skills: ['React.js', 'Gemini API', 'Firebase', 'MySQL', 'HTML', 'CSS', 'AI Integration', 'Generative AI'],
      achievements: ['AI platform development', 'API integration', 'Educational technology']
    }
  ];

  const experienceStats = [
    { icon: <MdWork />, number: "3", label: "Professional Roles", color: "#12c5ca" },
    { icon: <FaCalendarAlt />, number: "8+", label: "Months Experience", color: "#2a62fc" },
    { icon: <FaCode />, number: "15+", label: "Technologies Used", color: "#ff6b6b" },
    { icon: <FaTrophy />, number: "5+", label: "Major Projects", color: "#FFA116" }
  ];

  return (
    <section className="experience-section" id="experience" ref={experienceRef}>
      <div className="experience-header">
        <h2 className="experience-title">
          <span className="title-number">04.</span>
          Professional <span className="highlight">Experience</span>
        </h2>
        <p className="experience-subtitle">
          My journey through impactful roles and innovative projects in software development
        </p>
      </div>

      <div className="experience-container">
        {/* Experience Stats */}
        <div className="experience-stats">
          <div className="exp-stats-grid">
            {experienceStats.map((stat, index) => (
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

        {/* Experience Timeline */}
        <div className="experience-timeline">
          <div className="timeline-header">
            <h3 className="section-label">Career Journey</h3>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`timeline-item ${isVisible ? 'animate-timeline-item' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.2}s` }}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                  <div className={`status-indicator ${exp.status.toLowerCase()}`}>
                    {exp.status}
                  </div>
                </div>
                
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="card-header">
                      <div className="company-info">
                        <div className="company-logo">
                          <img src={exp.logo} alt={`${exp.company} logo`} />
                        </div>
                        <div className="company-details">
                          <h3 className="position-title">{exp.position}</h3>
                          <h4 className="company-name">{exp.company}</h4>
                        </div>
                      </div>
                      <div className="position-meta">
                        <div className="meta-item">
                          <FaCalendarAlt className="meta-icon" />
                          <span>{exp.duration}</span>
                          <span className="period">({exp.period})</span>
                        </div>
                        <div className="meta-item">
                          <FaMapMarkerAlt className="meta-icon" />
                          <span>{exp.location}</span>
                          <span className="work-type">{exp.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <div className="description-section">
                        <h5>Key Responsibilities & Achievements</h5>
                        <ul className="description-list">
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="experience-card-section">
                        <h5>Impact & Achievements</h5>
                        <div className="achievements-tags">
                          {exp.achievements.map((achievement, idx) => (
                            <span key={idx} className="achievement-tag">
                              <FaTrophy className="achievement-icon" />
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-footer">
                      <div className="technologies-section">
                        <h5>Technologies Used</h5>
                        <div className="tech-stack">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="tech-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
