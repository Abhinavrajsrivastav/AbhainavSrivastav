import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="abouts">
      <div className="about-body">
      <div className="abouts-me">
        <h3>About Me<span style={{color: 'rgb(18, 197, 202)'}}>.</span></h3>
        <span style={{fontSize: '13px'}}>Hey! I'm Abhinav Srivastava, a Software Engineer and Content Creator from Ayodhya, currently living in Noida, UttarPradesh.</span>
        <span style={{fontSize: '13px'}}>I mainly work on Front-End development on a daily basis, with JavaScript / TypeScript and frameworks like ReactJS, Next.js, and also React Native. I'm currently looking into learning Back-End JS development with NodeJS.</span>
        <span style={{fontSize: '13px'}}>I have been able to put my knowledge in good use by giving back to the community: volunteering on organizing tech events, creating educational content on social media, sharing open source projects and actively delivering workshops & conferences.</span>
        <span style={{fontSize: '13px'}}>When I don't code, I'm usually planning and working on my next piece of content (I haven't published too much in 2023, tough year tbh), playing on chess.com (just started btw), or taking care of my brand-new balcony garden.</span>
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
            <li>.....</li>
          </ul>
        </div>
      </div>
      <div className="Follow-Me">
        <span style={{fontSize: '15px'}}>Follow Me on Socials<span style={{color: "rgb(18, 197, 202)"}}>.</span><br />You will find me on major social media platforms under the username @choubari, or @choubari_ if the first one is taken.</span>
        <span style={{fontSize: '13px'}}>You will find me on major social media platforms under the username @abhinav_, or @_abhinav_srivastav__ if the first one is taken.</span>
      </div>
      <div className="Fotter-1">
        <h4>Let's build something cool together <span style={{color: 'rgb(18, 197, 202)'}}>!</span></h4>
      </div>
      <div className="Get-In-Touch">
        <span className="btn bg-primary" style={{backgroundColor: "rgb(18, 197, 202)"}}>Get in touch.</span>
      </div>
      </div>
    
    </div>
  )
}

export default About