import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import OpenSource from './Components/OpenSource/OpenSource';
import Vlogs from './Components/Vlogs/Vlogs';
import Contact from './Components/Contacts/Contacts';
import Footer from './Components/Footter/Fotter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkPage from './Components/Works/WorkPage';
import Achivements from './Components/Achivements/Achivements';
import About from './Components/About/About';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<WorkPage />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/Vlogs" element={<Vlogs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Achievements" element={<Achivements />} /> 
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
