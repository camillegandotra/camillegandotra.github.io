import './AboutMe.css';
import data from '../data.json'

function AboutMe() {
  return (
    <div className="AboutMe">
      <h1>> about me</h1>
        <h2>{data.profile.aboutme}</h2>
    </div>
  );
}

export default AboutMe;
