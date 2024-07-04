import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="abouts">
      <div className="about-body">
        <div className="abouts-me">
          <h3>About Me<span style={{color: 'rgb(18, 197, 202)'}}>.</span></h3>
          <span>Hey! I'm Abhinav Srivastava, an aspiring Software Engineer and Content Creator from Ayodhya, currently living in Ghaziabad, Uttar Pradesh.</span>
          <span>Currently pursuing my Bachelor's in Computer Science from <a href="https://www.abes.ac.in/" target="_blank" rel="noopener noreferrer">ABES</a> Engineering College Ghaziabad.</span>
          <span>I mainly work on front-end development and backend development with JavaScript/Java and frameworks like ReactJS and Spring Boot.</span>
          <span>I give back to the community by creating educational content on social media, sharing open source projects, and actively attending workshops and open talks.</span>
          <span>In my free time, I write notes, plan upcoming projects, read news, novels, or motivational stories, make videos, or take care of my learning garden.</span>
        </div>
        <div className="My-Services">
          <span className="Service-Head">What can I help you with<span style={{color: "rgb(18, 197, 202)"}}>?</span></span>
          <div className="Service-Body">
            <ul>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Database Design</li>
              <li>Deployment</li>
              <li>Code Reviewing</li>
              <li>Code Optimization</li>
              <li>Code Debugging</li>
              <li>Software Testing</li>
              <li>Low Level Software Designing</li>
              <li>Open Source Contribution</li>
              <li>Content Creation</li>         
            </ul>
          </div>
        </div>
        {/* <div className="Follow-Me">
          <span>You will find me on social media platforms under the username @srivast254 on Twitter, or @_abhinav_srivastav__ on Instagram.</span>
        </div> */}
        <div className="Fotter-1">
          <h4>Let's build something cool and creative together <span style={{color: 'rgb(18, 197, 202)'}}>!</span></h4>
        </div>
       <div className="Get-In-Touch">
          <span className="btn bg">
            <Link to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Get in Touch</Link>
          </span>
          <div className="social-icons">
            <a href="https://wa.me/919648502976" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a href="https://www.instagram.com/_abhinav_srivastav__/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a href="https://www.linkedin.com/in/abhinavraj/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
            <a href="https://twitter.com/srivast254" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
