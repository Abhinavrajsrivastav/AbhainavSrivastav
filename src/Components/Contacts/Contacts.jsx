import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Contacts.css';

function Contact() {
  const [client, setClient] = useState({
    name: '',
    email: '',
    needHelp: 'softwareDevelopment',
    message: '',
    recaptcha: false, // Add recaptcha to state
  });

  const { name, email, needHelp, message, recaptcha } = client;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.checked });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!name || !email || !message || !recaptcha) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8097/Contact', client);
      navigate('/Home');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App">
      <header className="Contact-header">
        <h1>Let's make some cool stuff together!</h1>
      </header>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="Your-Name">
          <div className="Name-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ram"
              className="Input"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="Email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="universe@verse.com"
              className="Input"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <label htmlFor="needHelp">What would you like to chat about?</label>
        <select
          id="needHelp"
          name="needHelp"
          defaultValue="softwareDevelopment"
          value={needHelp}
          onChange={(e) => onInputChange(e)}
        >
           <option value="BackendDevelopmemt">Backend Development</option>
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
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="....."
          value={message}
          onChange={(e) => onInputChange(e)}
        ></textarea>
        <div className="recaptcha">
          <div className="captcha">
            <input
              type="checkbox"
              id="recaptcha"
              name="recaptcha"
              required
              className="Input"
              checked={recaptcha}
              onChange={(e) => onCheckboxChange(e)}
            />
            <label htmlFor="recaptcha">I'm not a robot</label>
            <img
              src="./images/Tools/robot.png"
              style={{ height: '30px', width: '30px' }}
              alt="robot icon"
            />
          </div>
        </div>
        <button id="submitButton" className="Submit-responses">Send</button>
      </form>
    </div>
  );
}

export default Contact;
