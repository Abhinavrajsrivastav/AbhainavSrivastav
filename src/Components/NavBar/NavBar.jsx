import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  // Initialize theme based on localStorage or default to dark mode
  const [Theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light-mode' ? false : true; // Default to dark mode
  });

  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const name = "Abhinav";
  const OpenC = "<";
  const CloseC = "/>";

  useEffect(() => {
    // Apply the theme based on state
    if (Theme) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('theme', Theme ? 'dark-mode' : 'light-mode');
  }, [Theme]);

  const toggleTheme = () => {
    setTheme(!Theme);
  };

  const toggleMenu = () => {
    setMenu(!menu);
    setToggle(!toggle);
    document.body.classList.toggle('menu-open');
  };

  const iconStyle = {
    position: "relative",
    bottom: "2px",
    right: "3px"
  };

  return (
    <div className={`Container ${Theme ? 'dark-mode' : 'light-mode'}`}>
      <div className="Name">
        <div className="My-Name">
          <span className='OpenC'>{OpenC}</span>
          <span style={{color:"white"}}>{name}</span>
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
                {/* <Home style={iconStyle} /> */}
                <span>Home</span>
              </Link>
              <p>.</p>
            </div>
            <div className="About N">
              <Link to="/About">
                {/* <Person style={iconStyle} /> */}
                <span>About</span>
              </Link>
              <p>.</p>
            </div>
            <div className="Works N">
              <Link to="/">
                {/* <Work style={iconStyle} /> */}
                <span>Works</span>
              </Link>
              <p>.</p>
            </div>
            <div className="Skills N">
              <Link to="/Skills">
                {/* <School style={iconStyle} /> */}
                <span>Skills</span>              </Link>
              <p>.</p>
            </div>
            <div className="Achievements N">
              <Link to="/Achievements">
                {/* <Star style={iconStyle} /> */}
                <span>Achievements</span>
              </Link>
              <p>.</p>
            </div>
            <div className="Experience N">
              <Link to="/Experience">
                {/* <BusinessCenter style={iconStyle} /> */}
                <span>Experience</span>
              </Link>
              <p>.</p>
            </div>
          </div>
        </div>
      )}
      {document.body.clientWidth > 1005 && (
        <div className="Navigation">
          <div className="Home N">
            <Link to="/Home">
              {/* <Home style={iconStyle} /> */}
              <span>Home</span>
            </Link>
            <p>.</p>
          </div>
          <div className="About N">
            <Link to="/About">
              {/* <Person style={iconStyle} /> */}
              <span>About</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Works N">
            <Link to="/">
              {/* <Work style={iconStyle} /> */}
              <span>Works</span>
            </Link>
            <p>.</p>
          </div>          <div className="Skills N">
            <Link to="/Skills">
              {/* <School style={iconStyle} /> */}
              <span>Skills</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Achievements N">
            <Link to="/Achievements">
              {/* <Star style={iconStyle} /> */}
              <span>Achievements</span>
            </Link>
            <p>.</p>
          </div>
          <div className="Experience N">
            <Link to="/Experience">
              {/* <BusinessCenter style={iconStyle} /> */}
              <span>Experience</span>
            </Link>
            <p>.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
