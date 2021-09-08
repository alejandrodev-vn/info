import React from 'react';
import { PROJECTS } from '../mockups/PROJECTS';
import Project from './Project';
import Title from './Title';

Projects.propTypes = {};

function Projects() {
  return (
    <>
      <div className="mt-5" data-scroll-section>
        <Title title="PROJECTS" />
      </div>
      <div id="projects">
        {PROJECTS.map((project, index) => {
          return <Project project={project} index={index} key={index} />;
        })}
      </div>
    </>
  );
}

export default Projects;
