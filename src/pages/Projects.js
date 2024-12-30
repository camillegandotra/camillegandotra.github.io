import './Projects.css';
import data from '../data.json';
import githublogo from '../extra/github.png';
import linklogo from '../extra/link.png';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="Projects">
      <h1>> projects</h1>
      <div className="items">
        {data.projects.map((p, index) => (
          <div className="item" key={index}>
            <div className="item-header">
              <div className="item-liner">
                <div className="p-header">
                  <a
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="p-name"
                  >
                    {p.name}
                  </a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <img className="logo" src={githublogo} alt="GitHub Logo" />
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <img className="logo" src={linklogo} alt="Link Logo" />
                    </a>
                  )}
                </div>
                <h2 className="time" id="p-time">
                  {p.date}
                </h2>
              </div>
            </div>
            <div id="p-abstract">
              {p.abstract.map((item, idx) => (
                <div id="exp-abstract-item" key={idx}>
                  <h2>{item}</h2>
                </div>
              ))}
            </div>
            {p.tech && (
              <>
                <button
                  className="see-more-btn"
                  onClick={() => toggleExpand(index)}
                >
                  {expanded[index] ? 'See Less ∧' : 'See More ∨'}
                </button>
                <AnimatePresence>
                  {expanded[index] && (
                    <motion.div
                      className="expanded-section"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {p.description && (
                        <div className="description-section">
                          <h2>...</h2>
                          {p.description.map((desc, idx) => (
                            <div id="exp-desc-item" key={`desc-${idx}`}>
                              <h2>{desc}</h2>
                            </div>
                          ))}
                        </div>
                      )}

                      <h2>Tech Stack - {p['tech']} </h2>
                      
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
