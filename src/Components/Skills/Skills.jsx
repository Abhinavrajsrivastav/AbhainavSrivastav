import { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Define skill levels for technical skills
  const technicalSkills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'Spring Boot', level: 85 },
    { name: 'React', level: 80 },
    { name: 'SQL', level: 80 },
    { name: 'HTML & CSS', level: 85 },
    { name: 'Data Structures & Algorithms', level: 85 },
  ];

  // Group other skills by category
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        'Spring Boot',
        'Node.js',
        'RESTful APIs',
        'Microservices Architecture',
        'Kafka (Event Processing)',
        'Server-Sent Events (SSE)',
        'Multi-tenant Architecture',
        'Real-time Data Processing'
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        'MySQL',
        'Redis',
        'Firebase',
        'Database Design',
        'DBMS Optimization',
        'Data Modeling',
        'Query Optimization'
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS',
        'Google Cloud Platform (GCP)',
        'Docker',
        'CI/CD Pipelines',
        'Cloud Deployment',
        'Scalable Infrastructure',
        'Performance Monitoring'
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        'Git & Version Control',
        'Postman',
        'Bootstrap',
        'JUnit Testing',
        'Model Context Protocol (MCP)',
        'Visual Studio Code',
        'Power BI',
        'System Design'
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Project Leadership',
        'Technical Communication',
        'Code Review',
        'Agile Methodology',
        'Innovation & Creativity'
      ]
    }
  ];

  // Set up intersection observer to detect when skills section is in viewport
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <p>
          Building scalable solutions with cutting-edge technologies and modern development practices
        </p>
      </div>

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skills-category">
          <h3 className="category-title">
            <span>Core Technologies</span>
          </h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">
                  {skill.name.charAt(0)}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">
                  Proficient in building robust applications
                </p>
                <div className="skill-level">
                  <div className="level-label">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="level-bar">
                    <div 
                      className="level-fill"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills by Category */}
        {skillCategories.map((category, categoryIndex) => (
          <div className="skills-category" key={categoryIndex}>
            <h3 className="category-title">
              <span>{category.title}</span>
            </h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  className={`skill-card ${
                    category.title === 'Soft Skills' ? 'soft-skills' : 
                    category.title === 'Languages' ? 'languages' : ''
                  }`} 
                  key={skillIndex}
                >
                  <div className="skill-icon">
                    {skill.charAt(0)}
                  </div>
                  <h4 className="skill-name">{skill}</h4>
                  <p className="skill-description">
                    {category.title === 'Soft Skills' 
                      ? 'Essential for effective collaboration'
                      : category.title === 'Languages'
                      ? 'Communication and documentation'
                      : 'Modern development tool'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
