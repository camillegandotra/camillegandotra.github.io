import './Education.css';
import data from '../data.json'

function Education() {
  return (
    <div className="Education">
      <h1>> education</h1>
      <div className='items'>
        {data.education.map((edu) => (
          <div className="item">
            <div className="item-header">
              <div className='item-liner'>
                <h2 id="edu-institution">{edu.institution}</h2>
                <h2 className="time" id="edu-time">{edu.startdate}-{edu.enddate}</h2>
              </div>
                <h2 id="edu-degree">{edu.degree}</h2>
            </div>
            {
              edu['relevant courses'] && (
                <h2 id="edu-releventcourses">Relevant Courses - {edu['relevant courses']}</h2>
              )
            }
            {
              edu['activities/societies'] && (
                <h2 id="edu-activities/societies">Activities/Societies - {edu['activities/societies']}</h2>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
