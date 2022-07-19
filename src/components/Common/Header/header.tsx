import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={toggleMenu}>
                  Résumé
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
            </ul>

            <div className="social_box">
              <h3>Connect With Me</h3>
              <a href="mailto:hey@stanleee.me" className="mt-4">
                hey@stanleee.me
              </a>
              <div className="social_icons">
                <a href="https://github.com/iamstanlee">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/iamstanlee_">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/stan0x01/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
