import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialIconsList from '../socialIconsList';
import arrow from '../../../assets/svgs/arrow.svg';
import './header.scss';

export default function Header() {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const toggleMenu = () => setIsClosed(!isClosed);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="menu_btn_wrapper">
          <button className={isClosed ? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      {!isClosed && (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  PROFILE
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={toggleMenu}>
                  RESUME
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMenu}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <a href="https://blog.stanlee.dev" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                  BLOG
                </a>
                <img className="w-4 h-4" src={arrow} alt="pointer"/>
              </li>
            </ul>

            <div className="social_box">
              <SocialIconsList cn="social_buttons"/>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
