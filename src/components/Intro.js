import './Intro.css';
import pfp from'../extra/pfp.jpeg'

function Intro() {
  return (
    <div className="Intro">
          <div id="intro-words" >
            <h1 id="name">Camille Gandotra</h1>
            <h2 >Welcome to my website.</h2>
          </div>

          <button id="pfp-button"><img id="pfp" src={pfp} alt="Profile" /></button>
    </div>
  );
}

export default Intro;
