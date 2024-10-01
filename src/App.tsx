import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Base from './components/Base/base';
import Mobile from './components/Base/mobile';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import Header from './components/Common/Header/header';
import SocialIconsList from './components/Common/socialIconsList';

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
                    <Header/>
                    <div>
                        <Switch>
                            <Route exact path="/" render={(_) => <Mobile menu={menu}/>}/>
                            <Route exact path="/resume" render={(_) => <Resume activeMenu={activeMenu}/>}/>
                            <Route exact path="/projects" render={(_) => <Projects activeMenu={activeMenu}/>}/>
                        </Switch>
                    </div>
                    <SocialIconsList cn="social_buttons"/>
                </div>
                <div className="app-container">
                    <div className="m-fixed">
                        <Base menu={menu}/>
                    </div>
                    <div className="main">
                        <div className="pages_container">
                            <Switch>
                                <Route exact path="/" render={(_) => <Resume activeMenu={activeMenu}/>}/>
                                <Route exact path="/resume" render={(_) => <Resume activeMenu={activeMenu}/>}/>
                                <Route exact path="/projects" render={(_) => <Projects activeMenu={activeMenu}/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
