import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

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
          <span style={{ color: 'rgb(18, 197, 202)' }}>{OpenC}</span>
          <span>{name}</span>
          <span style={{ color: 'rgb(18, 197, 202)' }}>{CloseC}</span>
        </div>
        <div className="ToggleMenu" onClick={toggleMenu}>
          <img src={menu ? "./images/cross.png" : "./images/menu.png"} alt="Toggle Menu Icon" />
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
              <span>About</span>
              <p>.</p>
            </div>
            <div className="Works N">
              <Link to="/Works">
                <span>Works</span>
                </Link>
              <p>.</p>
            </div>
            <div className="Vlogs N">
              <span>Vlogs</span>
              <p>.</p>
            </div>
            <div className="Blogs N">
              <span>Blogs</span>
              <p>.</p>
            </div>
            <div className="Contacts N">
              <span>Contacts</span>
              <p>.</p>
            </div>
            <div className="Theme" onClick={toggleTheme}>
              {Theme ? (
                <img src="./images/moonMode.png" alt="Moon Mode Icon" />
              ) : (
                <img src="./images/LightMode.png" alt="Light Mode Icon" />
              )}
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
            <span>About</span>
            <p>.</p>
          </div>
          <div className="Works N">
            <Link to="/Works">
              <span>Works</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Vlogs N">
            <span>Vlogs</span>
            <p>.</p>
          </div>
          <div className="Blogs N">
            <span>Blogs</span>
            <p>.</p>
          </div>
          <div className="Contacts N">
            <span>Contacts</span>
            <p>.</p>
          </div>
          <div className="Theme" onClick={toggleTheme}>
            {Theme ? (
              <img src="./images/moonMode.png" alt="Moon Mode Icon" />
            ) : (
              <img src="./images/LightMode.png" alt="Light Mode Icon" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
