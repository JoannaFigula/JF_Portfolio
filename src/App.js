import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import './App.scss';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

export default class App extends Component {
    render() {
        return(
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>

                </div>
            </Router>
        )
    }
}
