import {projects} from '~/data/projects';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

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
            <div className="projects_container">
                <div className="project_container">
                    {projects.map((project, idx) => (
                        <section className="project" key={idx}>
                            <div className="">
                                <p>
                                    {`0${idx} — `}{project.name}
                                </p>
                                <div>
                                    <span
                                        style={{
                                            fontSize: 12,
                                            color: '#888888',
                                        }}>{project.technologies.map(t => t.name).join(", ")}</span>
                                </div>
                            </div>
                            <article className="description">
                                <p key={`desc-${idx}`}>
                                    {project.description}
                                </p>
                            </article>
                            {project.links.map((link, idx) => (
                                <span>
                  <a
                      className="project_link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                  >{link.name} </a>
                                    <i className="fa fa-external-link-alt fa-xs"></i>
                                    {idx !== project.links.length - 1 && <span>{`, `}</span>}
                </span>
                            ))}
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
