import React from 'react';
import './Contacts.css';

function Contact() {
  return (
    <div className="App">
      <header className="Contact-header">
        <h1>Let's make some cool stuff together!</h1>
      </header>
      <form className="form">
        <div className="Your-Name">
       <div className="Name-1">
         <label htmlFor="name">Name</label>
         <input type="text" id="name" name="name" placeholder='Ram' className="Input"/>
       </div>
        <div className="Email">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='ram@gmai.com' className="Input"/>
        </div>
        </div>
        <label htmlFor="topic">What would you like to chat about?</label>
        <select id="topic" name="topic" defaultValue="softwareDevelopment">
          <option value="BackendDevelopmemt">Bakend Development</option>
          <option value="FrontendDevelopment">Frontend Development</option>
          <option value="fullStackDevelopment">Full Stack Development</option>
          <option value="mobileDevelopment">Mobile Development</option>
          <option value="gameDevelopment">Game Development</option>
          <option value="webDevelopment">Web Development</option>
          <option value="MachineLearning">Machine Learning</option>
          <option value="design">UI/UX design</option>
          <option value="marketing">Video editing</option>
        </select>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" placeholder='.....'></textarea>
        <div className="recaptcha">
          <div className="captcha">
          <input type="checkbox" id="recaptcha" name="recaptcha" required className="Input"/>
          <label htmlFor="recaptcha">I'm not a robot</label>
          <img src="./images/Tools/robot.png" style={{height: '30px', width: '30px'}}></img>
          </div>
        </div>
        <button type="submit" className="Submit-responses">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
