import './Experience.css';
import data from '../data.json'

const expertiencetypes = ["work", "organizations", "leadership"]

function Experience() {
  return (
    <div className="Experience">
      <h1>> experience</h1>
      {expertiencetypes.map((type) => (
        <div id="experience-block">
          <button id="experience-name" ><h1>- {type}</h1></button>
          <div className='items'>
          {data.experience
            .filter((exp) => exp.category === type)
            .map((exp) => (
              <div className="item">
                <div className="item-header">
                  <h2 id="exp-company">{exp.company}</h2>
                  <h2 id="exp-position">{exp.position}</h2>
                  <h2 id="exp-time">{exp.startdate}-{exp.enddate}</h2>
                </div>
                <div id="exp-desc">
                  {exp.description.map((bullet) => (
                    <div id="exp-desc-item">
                      <h2>- {bullet}</h2>
                    </div>
                  ))}
                </div>
              </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;