import {projects} from '~/data/projects';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
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
            <Helmet title="Stanley Akpama | Projects" name="Selected Projects"
                    content="Selected Stanley Akpama's Projects"/>{' '}
            <div className="projects_container">
                <div className="top_row">
                    <h2>Selected Projects</h2>
                </div>
                <div className="project_container">
                    {projects.map((project, idx) => (
                        <section className="project" key={idx}>
                            <div className="title">
                                <p>
                                    {`0${idx}— `}{project.name}
                                </p>
                                {project.technologies.map((tech) => {
                                    return <div style={{
                                        backgroundColor: tech.badgeColor,
                                        margin: '4px',
                                        textTransform: 'uppercase',
                                    }}>
                                        <span style={{color: '#fff', fontSize: 9, marginLeft: '5px'}}>{tech.name}</span>
                                    </div>
                                })}
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
                  >{`${link.name}`}</a>{' '}
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
