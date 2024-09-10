import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
        <div id="leftnav">
          <h2><Link className="link" to="/">home</Link></h2>

        </div>
        <div id="rightnav">
            <h2><Link className="link" to="/education">education</Link></h2>
            <h2><Link className="link" to="/experience">experience</Link></h2>
            <h2><Link className="link" to="/projects">projects</Link></h2>
        </div>
    </div>
  );
}

export default NavBar;
