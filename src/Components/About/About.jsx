import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="abouts">
      <div className="about-body">
      <div className="abouts-me">
        <h3>About Me<span style={{color: 'rgb(18, 197, 202)'}}>.</span></h3>
        <span style={{fontSize: '13px'}}>Hey! I'm Abhinav Srivastava, a Software Engineer and Content Creator from Ayodhya, currently living in Noida, UttarPradesh.</span>
        <span style={{fontSize: '13px'}}>I mainly work on Front-End development and backed dev on a daily basis, with JavaScript / TypeScript / Java and frameworks like ReactJS, Node.js and also with Spring boot. I'm currently looking into learning Back-End JS development with NodeJS.</span>
        <span style={{fontSize: '13px'}}>I have been able to put my knowledge in good use by giving back to the community: creating educational content on social media, sharing open source projects and actively attending workshops and open talks.</span>
        <span style={{fontSize: '13px'}}>In my free time, I write notes, make a plan for upcoming projects, works and read news, novel or any motivational stories. (I haven't published too much in 2023), make videos (just started after a long time btw), or taking care of my learning garden.</span>
      </div>
      <div className="My-Services">
        <span className="Service-Head" style={{fontSize: '15px'}}>What can I help you with<span style={{color: "rgb(18, 197, 202)"}}>?</span></span>
        <div className="Service-Body" style={{fontSize: '13px'}}>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Database Design</li>
            <li>System Design</li>
            <li>Video Editing</li>
            <li>Content Creation</li>
            <li>Just hi</li>
            <li>.....</li>
          </ul>
        </div>
      </div>
      <div className="Follow-Me">
        <span style={{fontSize: '13px'}}>You will find me on social media platforms under the username @srivast254 on twitter, or @_abhinav_srivastav__ on insta if it is active.</span>
      </div>
      <div className="Fotter-1">
        <h4>Let's build something cool and creative together <span style={{color: 'rgb(18, 197, 202)'}}>!</span></h4>
      </div>
      <div className="Get-In-Touch">
        <span className="btn bg" style={{backgroundColor: "rgb(35, 160, 233)"}}>
          <Link to="/Contact" style={{textDecoration: 'none', color: 'white'}}>Get in Touch</Link>
        </span>
      </div>
      </div>
    
    </div>
  )
}

export default About