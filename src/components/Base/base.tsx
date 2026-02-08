import React from 'react';
import {Link} from 'react-router-dom';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import './base.scss';

export default function Base({menu}: any) {
    return (
        <div className="base_container">
            <div className="hero">
                <div className="intro_box">
                    <h1>
                        Hello! I'm <br/> Stanley.
                    </h1>
                    <div className="profile_pic">
                        <img className="w-48 h-48 rounded-full " src="/icons/icon-512-maskable.png" alt="my-avatar"/>
                    </div>
                </div>

                <div className="description">
                    <p>
                        <span>
                          I'm a Senior <span style={{
                                textDecoration: 'line-through',
                                color: '#000',
                                opacity: 0.7,
                                fontStyle: 'italic'
                            }}>Software</span>
                            <span className="highlight font-bold"> Product Engineer</span> and a <span
                            style={{color: '#000'}} className="italic font-bold">Builder</span> at heart.
                        </span>
                    </p>
                </div>

                <div className="go_button_container">
                    <Link to="/resume">
                        <button className="explore">Get to know me ➜</button>
                    </Link>
                </div>
            </div>

            <nav>
                <ul>
                    <li className={menu[0]}>
                        <small>
                            00
                            <Link to="/resume">
                                <img src={navLine} alt="menu bullet"/> RESUME
                            </Link>
                        </small>
                    </li>

                    <li className={menu[1]}>
                        <small>
                            01
                            <Link to="/projects">
                                <img src={navLine} alt="menu bullet"/> PROJECTS
                            </Link>
                        </small>
                    </li>

                    <li className={menu[2]}>
                        <small>
                            02
                            <Link to="/writings">
                                <img src={navLine} alt="menu bullet"/> WRITINGS
                            </Link>
                        </small>
                    </li>
                </ul>
            </nav>

            <div className="footer">
                <img className="w-16 h-16 rounded-full" src="/icons/apple-touch-icon.png" alt=""/>
                <div className="social">
                    <a href="https://github.com/iamstanlee" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> Github
                        <img src={arrow} alt="pointer"/>
                    </a>

                    <a href="https://linkedin.com/in/iamstanlee" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer"/>
                    </a>

                    <a href="mailto:hey@stanlee.dev" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i> Email <img src={arrow} alt="pointer"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
