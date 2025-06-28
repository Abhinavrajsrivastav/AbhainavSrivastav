import { useEffect, useRef, useState } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Define skill levels for technical skills with proper icons
  const technicalSkills = [
    { name: 'Java', level: 90, icon: '☕', class: 'java', description: 'Enterprise-grade backend development with Spring ecosystem' },
    { name: 'Python', level: 85, icon: '🐍', class: 'python', description: 'Data processing, automation, and rapid prototyping' },
    { name: 'JavaScript', level: 85, icon: '⚡', class: 'javascript', description: 'Full-stack development with modern ES6+ features' },
    { name: 'Spring Boot', level: 85, icon: '🍃', class: 'spring', description: 'Microservices architecture and RESTful API development' },
    { name: 'React', level: 80, icon: '⚛️', class: 'react', description: 'Dynamic UI development with hooks and state management' },
    { name: 'SQL', level: 80, icon: '🗄️', class: 'mysql', description: 'Complex queries, optimization, and database design' },
    { name: 'HTML & CSS', level: 85, icon: '🎨', class: 'html', description: 'Responsive web design and modern CSS techniques' },
    { name: 'Data Structures & Algorithms', level: 85, icon: '🧮', class: 'default', description: 'Problem-solving with optimized algorithms and data structures' },
  ];

  // Group other skills by category with proper icons
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Spring Boot', icon: '🍃', class: 'spring', description: 'Rapid development of production-ready applications' },
        { name: 'Node.js', icon: '🟢', class: 'nodejs', description: 'High-performance server-side JavaScript runtime' },
        { name: 'RESTful APIs', icon: '🔗', class: 'default', description: 'Designing scalable and secure web services' },
        { name: 'Microservices Architecture', icon: '🔗', class: 'default', description: 'Building distributed, loosely-coupled systems' },
        { name: 'Kafka (Event Processing)', icon: '📡', class: 'kafka', description: 'Real-time data streaming and event-driven architecture' },
        { name: 'Server-Sent Events (SSE)', icon: '📤', class: 'default', description: 'Real-time client updates and live data feeds' },
        { name: 'Multi-tenant Architecture', icon: '🏢', class: 'default', description: 'Scalable SaaS applications with data isolation' },
        { name: 'Real-time Data Processing', icon: '⚡', class: 'default', description: 'Stream processing and live analytics systems' }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'MySQL', icon: '🐬', class: 'mysql', description: 'Relational database management and optimization' },
        { name: 'Redis', icon: '🔴', class: 'redis', description: 'In-memory caching and session management' },
        { name: 'Firebase', icon: '🔥', class: 'firebase', description: 'Real-time database and cloud backend services' },
        { name: 'Database Design', icon: '🗄️', class: 'default', description: 'Normalized schema design and relationship modeling' },
        { name: 'DBMS Optimization', icon: '⚙️', class: 'default', description: 'Query performance tuning and indexing strategies' },
        { name: 'Data Modeling', icon: '📊', class: 'default', description: 'Entity relationship design and data architecture' },
        { name: 'Query Optimization', icon: '🔍', class: 'default', description: 'SQL performance analysis and execution planning' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: '☁️', class: 'aws', description: 'Cloud infrastructure deployment and management' },
        { name: 'Google Cloud Platform (GCP)', icon: '☁️', class: 'default', description: 'Serverless computing and ML services integration' },
        { name: 'Docker', icon: '🐳', class: 'docker', description: 'Application containerization and orchestration' },
        { name: 'CI/CD Pipelines', icon: '🔄', class: 'default', description: 'Automated testing, building, and deployment workflows' },
        { name: 'Cloud Deployment', icon: '🚀', class: 'default', description: 'Scalable application hosting and auto-scaling' },
        { name: 'Scalable Infrastructure', icon: '📈', class: 'default', description: 'Load balancing and high-availability systems' },
        { name: 'Performance Monitoring', icon: '📊', class: 'default', description: 'Application metrics, logging, and alerting systems' }
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git & Version Control', icon: '🌿', class: 'git', description: 'Collaborative development and code versioning' },
        { name: 'Postman', icon: '📮', class: 'postman', description: 'API testing, documentation, and integration testing' },
        { name: 'Bootstrap', icon: '🅱️', class: 'bootstrap', description: 'Responsive front-end component library' },
        { name: 'JUnit Testing', icon: '✅', class: 'default', description: 'Unit testing and test-driven development' },
        { name: 'Model Context Protocol (MCP)', icon: '🤖', class: 'default', description: 'AI model integration and context management' },
        { name: 'Visual Studio Code', icon: '💻', class: 'default', description: 'Efficient development with extensions and debugging' },
        { name: 'Power BI', icon: '📊', class: 'default', description: 'Business intelligence and data visualization' },
        { name: 'System Design', icon: '🏗️', class: 'default', description: 'Architecting scalable and resilient systems' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: '🧩', class: 'default', description: 'Analytical thinking and creative solution development' },
        { name: 'Team Collaboration', icon: '🤝', class: 'default', description: 'Cross-functional teamwork and agile methodologies' },
        { name: 'Project Leadership', icon: '👑', class: 'default', description: 'Technical guidance and project coordination' },
        { name: 'Technical Communication', icon: '💬', class: 'default', description: 'Clear documentation and stakeholder presentations' },
        { name: 'Code Review', icon: '👀', class: 'default', description: 'Quality assurance and knowledge sharing practices' },
        { name: 'Agile Methodology', icon: '🔄', class: 'default', description: 'Iterative development and continuous improvement' },
        { name: 'Innovation & Creativity', icon: '💡', class: 'default', description: 'Technology exploration and creative problem-solving' }
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
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subTitle">
          Building scalable solutions with cutting-edge technologies and modern development practices
        </p>
      </div>

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skills-category">
          <h3 className="skills-category-title">
            <span>Core Technologies</span>
          </h3>
          <div className="skills-progress-container">
            {technicalSkills.map((skill, index) => (
              <div className="skill-progress-item" key={index}>
                <div className={`skill-icon ${skill.class}`}>
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <p className="skill-description">
                  {skill.description}
                </p>
                <div className="skill-level">
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill"
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
            <h3 className="skills-category-title">
              <span>{category.title}</span>
            </h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-card" key={skillIndex}>
                  <div className={`skill-icon ${skill.class}`}>
                    {skill.icon}
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">
                    {skill.description}
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
