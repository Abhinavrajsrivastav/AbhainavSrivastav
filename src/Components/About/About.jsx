import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="abouts">
      <div className="about-body">
        <div className="abouts-me">
          <h3>About Me<span style={{color: 'rgb(18, 197, 202)'}}>.</span></h3>
          <span>Hey! I'm Abhinav Srivastava, a Software Engineer and Content Creator from Ayodhya, currently living in Ghaziabad, Uttar Pradesh.</span>
          <span>Recent B.Tech graduate in Computer Science from <a href="https://www.abes.ac.in/" target="_blank" rel="noopener noreferrer">ABES</a> Engineering College Ghaziabad with experience in full-stack development.</span>
          <span>I specialize in building scalable multi-tenant architectures, real-time data processing systems, and AI-driven platforms using Java, Python, JavaScript, Spring Boot, and ReactJS.</span>
          <span>Experienced in working with cloud technologies, microservices, and have contributed to financial data systems with AES encryption and Kafka-based event processing.</span>
          <span>Passionate about creating innovative solutions - from interview management systems to AI-powered developer platforms, while actively contributing to open source and educational content.</span>
        </div>
        <div className="My-Services">
          <span className="Service-Head">What can I help you with<span style={{color: "rgb(18, 197, 202)"}}>?</span></span>
          <div className="Service-Body">
            <ul>
              <li>Full-Stack Development (Java, Python, JavaScript)</li>
              <li>Multi-Tenant Architecture Design</li>
              <li>Real-Time Data Processing (Kafka, SSE)</li>
              <li>AI-Powered Platform Development</li>
              <li>Database Design & Optimization</li>
              <li>Cloud Deployment & DevOps</li>
              <li>Microservices Architecture</li>
              <li>Financial Data Systems</li>
              <li>Interview Management Systems</li>
              <li>API Development & Integration</li>
              <li>Open Source Contribution</li>
              <li>Technical Content Creation</li>         
            </ul>
          </div>
        </div>
        {/* <div className="Follow-Me">
          <span>You will find me on social media platforms under the username @srivast254 on Twitter, or @_abhinav_srivastav__ on Instagram.</span>
        </div> */}
        <div className="Fotter-1">
          <h4>Let's build scalable, innovative solutions together <span style={{color: 'rgb(18, 197, 202)'}}>!</span></h4>
        </div>
       <div className="Get-In-Touch">
          <div className="social-icons">
            <a href="https://www.instagram.com/_abhinav_srivastav__/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-raj-srivastava-599aaa1b2/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={30} color="#0077B5" />
            </a>
            <a href="https://twitter.com/srivast254" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            {/* <a href="https://twitter.com/srivast254" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="Black" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
