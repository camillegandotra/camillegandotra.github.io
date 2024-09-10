import React, { useEffect, useRef } from 'react';

import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import Movie from '../components/Movie';
import './Home.css';

function Home() {

  return (
    <div className="Home">
        <Intro/>
        <AboutMe/>
        <Contact/>
        <Movie/>
    </div>
  );
}

export default Home;
