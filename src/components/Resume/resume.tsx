import {resume} from '~/data/resume';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './resume.scss';

interface ResumeProp {
    menu?: string[];
    activeMenu: (arg: number) => void;
}

export default function Resume(props: ResumeProp) {
    useEffect(() => {
        props.activeMenu(0);
    }, []);

    return (
        <div className="resume">
            <div className="resume_container">
                <div className="top_row">
                    <h2>{resume.name}</h2>
                    <div className="buttons">
                        <a href="/Stanley_Akpama_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                            <small>
                                <i className="fas fa-download"></i> <span>Download </span>
                            </small>
                        </a>
                    </div>
                </div>

                <p className="subheading">{resume.title}</p>

                <div className="summary">
                    <p>{resume.intro}</p>
                </div>

                <div>
                    {resume.taglines?.map((tagline, idx) => (
                        <div key={`tagline-${idx}`} className="tagline">
                            <i className={`fas ${tagline.icon}`}></i>
                            <div>
                                <h5>{tagline.title}</h5>
                                <small>{tagline.text}</small>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="divider">
                    <p>Feedbacks & Recommendations</p>
                    <span></span>
                </div>

                <div>
                    {resume.recommendations?.map((recommendation) => <section className="recommendation">
                        <div className="profile">
                            <img src={(recommendation.user.profilePicUrl)} alt='Photo'/>
                            <div>
                                <a href={recommendation.user.linkedInUrl} target="_blank">
                                    {recommendation.user.name}
                                    <i className="fab fa-linkedin pl-2 mt-1"></i>
                                </a>
                                <small>{recommendation.user.role}</small>
                            </div>
                        </div>
                        <p>
                            <span className="font-bold text-black">"</span>
                            {recommendation.feedback}
                            <span className="font-bold text-black">"</span>
                        </p>
                    </section>)}
                </div>


                <div className="divider">
                    <p>Skills</p>
                    <span></span>
                </div>

                <div className="skills">
                    {resume.skills.map((skill, idx) => (
                        <p key={`skill-${idx}`}>
                            <span className="pr-2 text-black">{skill.title}: </span> {skill.body.join(', ')}
                        </p>
                    ))}
                </div>

                <div className="divider">
                    <p>Work Experience</p>
                    <span></span>
                </div>

                <div className="default_container">
                    {resume.workExperiences.map((experience, idx) => (
                        <section key={idx}>
                            <p className="title">
                                <a href={experience.companyUrl}
                                   target="_blank">{experience.company}</a> - {experience.role}
                                <span>
                              {experience.startDate} - {experience.endDate ? experience.endDate : 'PRESENT'}
                            </span>
                            </p>
                            <article className="description">
                                {experience.jobDescription && <p>{experience.jobDescription}</p>}
                                {experience.achievements.map((achievement, idx) => (
                                    <p key={`achievement-${idx}`}>
                                        <span>—</span>
                                        {achievement}
                                    </p>
                                ))}
                            </article>
                        </section>
                    ))}
                </div>

                <div className="divider">
                    <p>Education</p>
                    <span></span>
                </div>

                <div className="default_container">
                    <section>
                        {resume.educations.map((education, idx) => (
                            <>
                                <p key={`education-${idx}`} className="title">
                                    {education.title}
                                    <span> {education.startDate} - {education.endDate}</span>
                                </p>
                                <article className="description">
                                    <p>{`— Relevant coursework: ${education.relevant.join(', ')}`}</p>
                                </article>
                            </>
                        ))}
                    </section>
                </div>

            </div>

            <div className="go_button_container">
                <Link to="/">
                    <button>
                        <b>➜ </b>Home
                    </button>
                </Link>
                <Link to="/projects">
                    <button>Projects ➜</button>
                </Link>
            </div>
        </div>
    );
}
