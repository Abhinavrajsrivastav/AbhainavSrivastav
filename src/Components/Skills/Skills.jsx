import { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Define skill levels for technical skills
  const technicalSkills = [
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Spring Boot', level: 70 },
    { name: 'HTML & CSS', level: 85 },
    { name: 'SQL', level: 75 },
    { name: 'C', level: 70 },
    { name: 'Data Structures & Algorithms', level: 80 },
  ];

  // Group other skills by category
  const skillCategories = [
    {
      title: 'Software Engineering',
      skills: [
        'Object-Oriented Programming (OOP)',
        'SOLID Principles',
        'Design Patterns',
        'Unit Testing',
        'Mockito',
        'Git & Version Control',
        'REST API Design',
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        'Microsoft Azure',
        'Google Cloud Platform (GCP)',
        'Firebase',
        'Docker',
        'Kubernetes',
        'CI/CD Pipelines',
      ]
    },
    {
      title: 'Computer Science Fundamentals',
      skills: [
        'Operating Systems',
        'Computer Networking',
        'Database Management Systems',
        'System Design',
        'Problem Solving',
        'Agile Methodology',
        'SDLC',
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
      <h2 className="skills-title">My <span>Skills</span></h2>
      <p className="skills-subTitle">
        A showcase of my technical expertise and professional competencies in software engineering
      </p>

      <div className="skills-container">
        {/* Technical Skills with Progress Bars */}
        <div className="skills-primary">
          <h3 className="skills-category-title">Core Technical Proficiencies</h3>
          <div className="skills-progress-container">
            {technicalSkills.map((skill, index) => (
              <div className="skill-progress-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">                  <div 
                    className={`skill-progress-fill ${isVisible ? 'animate-progress' : ''}`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%', '--level': `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skill Categories */}
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div className={`skills-category ${isVisible ? 'animate-fade-in' : ''}`} key={categoryIndex} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
