import './Projects.css';
import data from '../data.json'
import githublogo from '../extra/github.png'
import linklogo from '../extra/link.png'

function Projects() {
  return (
    <div className="Projects">
      <h1>> projects</h1>
      <div className='items'>
        {data.projects.map((p) => (
        <div className="item">
            <div className="item-header">
              <div className='item-liner'>
                <div className="p-header">
                  <a href={p.link} className="link" target="_blank"id="p-name">{p.name}</a>
                  {p.github && (
                    <a href={p.github} target="_blank">
                        <img className="logo" src={githublogo} alt="GitHub Logo" />
                    </a>
                    )}   
                  {p.link && (
                  <a href={p.link} target="_blank">
                      <img className="logo" src={linklogo} alt="Link Logo" />
                  </a>
                  )}    
                </div>
                <h2 className="time" id="p-time">{p.date}</h2> 
              </div>
                <h2 id="p-position">{p.position}</h2>
            </div>
            <div id="p-desc">
                {p.description.map((bullet) => (
                <div id="exp-desc-item">
                    <h2>- {bullet}</h2>
                </div>
                ))}
            </div>
            </div>
        ))}
    </div>
    </div>
  );
}

export default Projects;
