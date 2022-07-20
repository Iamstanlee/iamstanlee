import { resume } from '~/data/resume';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Common/SEO/helmet';
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
      <Helmet
        title="Stanley Akpama | Resume"
        name="Stanley Akpama Resume"
        content="Stanley Akpama - Software Engineer Resume"
      />
      <div className="resume_container">
        <div className="top_row">
          <h2>{resume.name}</h2>
          <div className="buttons">
            <a
              href="https://docs.google.com/document/d/12AGNPqEdltlhUTpOOW5haEX7CSBF6A4QFumI0s37CYE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        <div className="divider">
          <p>Skills</p>
          <span></span>
        </div>

        <div className="skills">
          {resume.skills.map((skill, idx) => (
            <p key={`skill-${idx}`} className="">
              <span className="pr-2 text-white">{skill.title}: </span> {skill.body.join(', ')}
            </p>
          ))}
        </div>

        <div className="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          {resume.workExperiences.map((experience, idx) => (
            <section className="experience" key={idx}>
              <p className="title">
                {experience.company} - {experience.role}
                <span>
                  <br /> {experience.startDate} - {experience.endDate ? experience.endDate : 'PRESENT'}
                </span>
              </p>
              <article className="description">
                {experience.achievements.map((achievement, idx) => (
                  <p key={`achievement-${idx}`}>
                    <span>➜</span>
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

        <div className="exp_container">
          <section className="experience">
            {resume.educations.map((education, idx) => (
              <p key={`education-${idx}`} className="title">
                {education.title}
                <br />
                <span>
                  {education.startDate} - {education.endDate}
                </span>
                <br />
                <span style={{ fontSize: 13 }}>{`➜ Relevant coursework: ${education.relevant.join(', ')}`}</span>
              </p>
            ))}
          </section>
        </div>

        <div className="divider">
          <p>Languages</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            {resume.languages.map((language) => (
              <p className="title">
                {language.name} -<span>{language.level}</span>
              </p>
            ))}
          </section>
        </div>

        <div className="divider">
          <p>Hobbies</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>{resume.hobbies.join(', ')}</p>
            </article>
          </section>
        </div>

        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>
                Some selected projects can be found <span> </span>
                <span className="underline">
                  <Link to="/projects"> here</Link>
                </span>
              </p>
            </article>
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
