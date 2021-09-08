import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import $ from 'jquery';
import '../assets/vendor/jquery.hover3d.min.js';
import { DarkModeContext } from '../contexts/DarkModeContext';
Project.propTypes = {};

function Project(props) {
  const [isView, setIsView] = useState(false);
  const { index, project } = props;
  const { image, title } = project;
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    $('.project').hover3d({
      selector: '.project__card',
    });
  }, []);
  return (
    <section className="container" data-scroll-section>
      <div
        className={`project ${
          index % 2 === 0 ? 'project--right' : 'project--left'
        }`}
      >
        <div
          className="project__title"
          data-scroll
          data-scroll-speed="4"
          data-scroll-repeat
          data-scroll-direction="horizontal"
          data-scroll-target={`#project${index}`}
          style={isDarkMode ? {} : { color: '#000' }}
        >
          <h2 className="title magic-hover">{title}</h2>
        </div>
        <div
          onClick={() => {
            setIsView(!isView);
          }}
          className="project__card magic-hover"
          id={`project${index}`}
        >
          {!isView ? (
            <img
              data-scroll
              data-scroll-speed="2"
              data-scroll-repeat
              src={`/info/images/${image}`}
              alt={title}
            />
          ) : (
            <Card
              project={project}
              index={index}
              data-scroll
              data-scroll-speed="2"
              data-scroll-repeat
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;
