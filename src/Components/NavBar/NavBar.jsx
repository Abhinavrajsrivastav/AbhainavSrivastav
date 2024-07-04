import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [Theme, setTheme] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const name = "Abhinav";
  const OpenC = "<";
  const CloseC = "/>";

  const toggleTheme = () => {
    if (Theme) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      document.body.classList.add('bg-video');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('bg-video');
      document.body.classList.add('light-mode');
    }
    setTheme(!Theme);
  };

  const toggleMenu = () => {
    setMenu(!menu);
    setToggle(!toggle);
    document.body.classList.toggle('menu-open');
  };

  return (
    <div className={`Container ${Theme ? 'dark-mode' : 'light-mode'}`}>
      <div className="Name">
        <div className="My-Name">
          <span className='OpenC'>{OpenC}</span>
          <span>{name}</span>
          <span className='CloseC'>{CloseC}</span>
        </div>
        <div className="ToggleMenu" onClick={toggleMenu}>
          {menu ? <FaTimes size={20} color="#32a6e9"/> : <FaBars size={20} color="#32a6e9"/>}
        </div>
      </div>
      {document.body.clientWidth <= 1005 && toggle && (
        <div className="NavBar">
          <div className="Navigation">
            <div className="Home N">
              <Link to="/Home">
                <span>Home</span>
              </Link>
              <p>.</p>
            </div>
            <div className="About N">
              <Link to="/About">
                <span>About</span>
              </Link>
              <p>.</p>
            </div>
            <div className="Works N">
              <Link to="/">
                <span>Works</span>
              </Link>
              <p>.</p>
            </div>
             <div className="Works N">
              <Link to="/Skills">
                <span>Skills</span>
              </Link>
              <p>.</p>
            </div>
            {/* <div className="Vlogs N">
              <span>Vlogs</span>
              <p>.</p>
            </div> */}
            <div className="Blogs N">
              <Link to="/Achievements">
                <span>Achievements</span>
              </Link>
              <p>.</p>
            </div>
            <div className="Contacts N">
              <Link to="/Contact">
                <span>Contacts</span>
              </Link>
              <p>.</p>
            </div>
            <div className="Theme" onClick={toggleTheme}>
              {Theme ? <FaMoon size={20} color="#32a6e9"/> : <FaSun size={20} color="#32a6e9"/>}
            </div>
          </div>
        </div>
      )}
      {document.body.clientWidth > 1005 && (
        <div className="Navigation">
          <div className="Home N">
            <Link to="/Home">
              <span>Home</span>
            </Link>
            <p>.</p>
          </div>
          <div className="About N">
            <Link to="/About">
              <span>About</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Works N">
            <Link to="/">
              <span>Works</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Works N">
              <Link to="/Skills">
                <span>Skills</span>
              </Link>
              <p>.</p>
            </div>
          {/* <div className="Vlogs N">
            <span>Vlogs</span>
            <p>.</p>
          </div> */}
          <div className="Achievements N">
           <Link to="/Achievements">
            <span>Achievements</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Contacts N">
            <Link to="/Contact">
              <span>Contacts</span>
              </Link>
            <p>.</p>
          </div>
          <div className="Theme" onClick={toggleTheme}>
            {Theme ? <FaMoon size={20} color="#32a6e9"/> : <FaSun size={20} color="#32a6e9"/>}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
