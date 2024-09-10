import './App.css';
import Intro from './components/Intro.js';
import Contact from './components/Contact.js';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js'
import Education from './pages/Education.js'
import Experience from './pages/Experience.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <div className='App'>
      <div id="content">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />

        </Routes>
        <Footer/>
      </div>
      </div>
    </Router>
  );
}

export default App;
