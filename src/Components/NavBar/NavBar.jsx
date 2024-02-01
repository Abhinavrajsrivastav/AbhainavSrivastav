import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [Theme, setTheme] = useState(true);
    const name = "Abhinav";
    const OpenC = "<";
    const CloseC = "/>";

    const toggleTheme = () => {
        // Toggle the class based on the current theme
        if (Theme) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }

        // Toggle the theme state
        setTheme(!Theme);
    };

    return (
        <div className={`Container ${Theme ? 'dark-mode' : 'light-mode'}`}>
            <div className="Name">
                <span style={{ color: 'rgb(18, 197, 202)' }}>{OpenC}</span>
                <span>{name}</span>
                <span style={{ color: 'rgb(18, 197, 202)' }}>{CloseC}</span>
            </div>
            <div className="Navigation">
                <div className="Home N">
                    <span>Home</span>
                    <p>.</p>
                </div>
                <div className="About N">
                    <span>About</span>
                    <p>.</p>
                </div>
                <div className="Works N">
                    <span>Works</span>
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
                        <img src="./images/moonMode.png" alt="" />
                    ) : (
                        <img src="./images/LightMode.png" alt="" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
