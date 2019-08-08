/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Register service worker.
import './registerServiceWorker';

// Router, Routes, Switches and Links.
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// View Components.
import WelcomingView from './welcomingView';
import RegistrationView from './registrationView';
import SubjectView from './subjectView';
import HomeView from './homeView';
import ArticleView from './articleView';
import ConfigurationView from './configurationView';

// import * as serviceWorker from "../serviceWorker";
class SwitcherDOMComponent extends Component {
  render() {
    const bodyDom = document.querySelector('body');
    bodyDom.setAttribute('class', 'bodyGlobal');
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomingView} />
            <Route exact path="/registration" component={RegistrationView} />
            <Route exact path="/subject" component={SubjectView} />
            <Route exact path="/home" component={HomeView} />
            <Route exact path="/article" component={ArticleView} />
            <Route exact path="/configuration" component={ConfigurationView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// Exports Class Component that will render Component into the DOM.
export default SwitcherDOMComponent;

// React DOM will render Component into Root element.
/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(<SwitcherDOMComponent />, document.getElementById('root'));
