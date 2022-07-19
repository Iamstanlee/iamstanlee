import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Base from './components/Base/base';
import Mobile from './components/Base/mobile';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import Header from './components/Common/Header/header';

function App() {
  const [menu, setMenu] = useState<string[]>(['active_menu', '']);

  const activeMenu = (id: number) => {
    switch (id) {
      case 0:
        setMenu(() => ['active_menu', '']);
        break;

      case 1:
        setMenu(() => ['', 'active_menu']);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="mobile_container">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" render={(_) => <Mobile menu={menu} />} />
              <Route exact path="/resume" render={(_) => <Resume activeMenu={activeMenu} />} />
              <Route exact path="/projects" render={(_) => <Projects activeMenu={activeMenu} />} />
            </Switch>
          </div>
          <div className="social_buttons">
            <a href="https://github.com/iamstanlee" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/stanlee_" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/stan0x01/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="app-container">
          <div className="m-fixed">
            <Base menu={menu} />
          </div>
          <div className="main">
            <div className="pages_container">
              <Switch>
                <Route exact path="/" render={(_) => <Resume activeMenu={activeMenu} />} />
                <Route exact path="/resume" render={(_) => <Resume activeMenu={activeMenu} />} />
                <Route exact path="/projects" render={(_) => <Projects activeMenu={activeMenu} />} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
