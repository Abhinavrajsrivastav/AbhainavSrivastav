import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Achivements from './Components/Achivements/Achivements';
import Contact from './Components/Contacts/Contacts';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footter/Fotter';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import OpenSource from './Components/OpenSource/OpenSource';
import Skills from './Components/Skills/Skills';
import Vlogs from './Components/Vlogs/Vlogs';
import WorkPage from './Components/Works/WorkPage';
import './global.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<WorkPage />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/Vlogs" element={<Vlogs />} />        <Route path="/About" element={<About />} />
        <Route path="/Achievements" element={<Achivements />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  );
}; 

export default App;
