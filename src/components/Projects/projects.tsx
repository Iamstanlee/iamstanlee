import { projects } from '~/data/projects';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Common/SEO/helmet';
import './projects.scss';
interface ProjectsProps {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

export default function Projects(props: ProjectsProps) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="project">
      <Helmet title="Stanley Akpama | Projects" name="Selected Projects" content="Selected Stanley Akpama's Projects" />{' '}
      <div className="projects_container">
        <div className="top_row">
          <h2>Selected Projects</h2>
        </div>

        <div className="project_container">
          {projects.map((project, idx) => (
            <section className="project" key={idx}>
              <p className="title">
                {project.name}
                <span>{project.technologies.join(', ')}</span>
              </p>
              <article className="description">
                <p key={`desc-${idx}`}>
                  <span>➜</span>
                  {project.description}
                </p>
              </article>
            </section>
          ))}
        </div>
      </div>
      <div className="go_button_container">
        <Link to="/resume">
          <button>
            <b>➜ </b>Resume
          </button>
        </Link>
      </div>
    </div>
  );
}
