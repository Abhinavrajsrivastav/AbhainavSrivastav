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
         <label htmlFor="name">Full Name</label>
         <input type="text" id="name" name="name" placeholder='Ram'/>
       </div>
        <div className="Email">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='ram@gmai.com'/>
        </div>
        </div>
        <label htmlFor="topic">What would you like to chat about?</label>
        <select id="topic" name="topic" defaultValue="softwareDevelopment">
          <option value="softwareDevelopment">Software Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" placeholder='.....'></textarea>
        <div className="recaptcha">
          <div className="captcha">
          <input type="checkbox" id="recaptcha" name="recaptcha" required />
          <label htmlFor="recaptcha">I'm not a robot</label>
          </div>
        </div>
        <button type="submit" className="Submit-response">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
