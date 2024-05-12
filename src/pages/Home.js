import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <Intro/>
        <AboutMe/>
        <Contact/>
    </div>
  );
}

export default Home;
