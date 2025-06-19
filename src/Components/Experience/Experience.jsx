import { MdWork } from 'react-icons/md';
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Ninjacart',
      logo: '/images/Experience/n.png',
      position: 'SDE Intern',
      duration: 'Apr 2025 - Jun 2025 · 3 mos',
      location: 'Bengaluru, Karnataka, India · On-site',
      description: [
        'Architected a high-performance, Multi-tenant event-driven system with Apache Kafka for real-time data streaming and processing.',
        'Implementing innovative deduplication strategies using Cuckoo Filters for efficient data handling.',
        'Built a secure multi-tenant system with realm-based data isolation and AES-256 encryption for sensitive financial data.',
        'Integrating with Spring AI\'s Model Context Protocol (55+ MCP Tools) and Server-Sent Events (SSE) for AI model communication.',
        'Optimized performance through Redis caching, Java 21 Virtual Threads, adaptive batch processing, and database pooling.'
      ],
      skills: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'AES-256']
    },
    {
      id: 2,
      company: 'Sopra Steria',
      logo: '/images/Experience/images.jpg',
      position: 'Externship',
      duration: 'Oct 2024 - Nov 2024 · 2 mos',
      location: 'Noida, Uttar Pradesh, India · Hybrid',
      description: [
        'Built & deployed an interview dashboard with real-time video conferencing and interview management features.',
        'Backend: Developed backend APIs for creating, ending, and joining a meeting using Java and Spring Boot.',
        'Frontend: Designed a responsive interface using React.js and HTML/CSS.',
        'Database: Store meeting users data using MySQL and user signup/login with Google Firebase.'
      ],
      skills: ['React.js', 'Software Development', 'Java', 'Spring Boot', 'MySQL', 'Firebase', 'HTML', 'CSS']
    },
    {
      id: 3,
      company: 'Google',
      logo: '/images/Experience/image.png',
      position: 'Google Gemini API Developer Competition',
      duration: 'Jun 2024 - Aug 2024 · 3 mos',
      location: 'Part-time',
      description: [
        'Designed and developed Educome, an interactive platform aimed at enhancing educational experiences using generative AI (Google\'s Gemini).',
        'Utilized Google\'s Gemini API to integrate intelligent features such as Projects Search, Book Search, developer match, developments rating & ranking, and Learn with Generative AI.',
        'Frontend: Created responsive UI with React.js and HTML/CSS.',
        'Database: Used MySQL database for user\'s data management and Google\'s Firebase for user signup/login/logout.'
      ],
      skills: ['React.js', 'Software Development', 'Gemini API', 'Firebase', 'MySQL', 'HTML', 'CSS']
    }
  ];

  return (
    <div className="experience-container fade-in">
      <div className="experience-header">
        <h2 className="section-heading"><MdWork className="experience-icon" /> Professional Experience<span className="highlight-dot">.</span></h2>
        <p>My journey through professional work experiences and projects</p>
      </div>
      <div className="experience-cards fade-in-children">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
