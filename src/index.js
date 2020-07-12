import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
//import Contato from './pages/contato';

ReactDOM.render(
    (
        <Router>
            <App></App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>

        </Router>
    ),
    document.getElementById('root')
);