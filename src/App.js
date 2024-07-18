import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import CodingProjects from './components/CodingProjects';
import ThreeDProjects from './components/ThreeDProjects';
import AnimationProjects from './components/AnimationProjects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/coding-projects" element={<CodingProjects />} />
          <Route path="/3d-projects" element={<ThreeDProjects />} />
          <Route path="/animation-projects" element={<AnimationProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


