import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import profileImg from '../../assets/svgs/profile_pic.jpg';
import './base.scss';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello! I'm <br /> Stanley.
          </h1>
          <div className="profile_pic">
            <img className="w-48 h-48 rounded-full " src={profileImg} alt="my-avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a <span style={{ textDecoration: 'line-through', color: '#ffffff', opacity: 0.7 }}>Software</span>
              <span className="highlight"> Product Engineer</span>. I love to use my creativity and engineering skills to solve problems and create new products that make people's lives easier.
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/resume">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <img className="w-16 h-16 rounded-full" src={profileImg} alt="" />
        <div className="social">
          <a href="https://github.com/iamstanlee" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://linkedin.com/in/stan0x01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>

          <a href="https://twitter.com/iamstanlee_" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
