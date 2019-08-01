// React Component, for building Class Component.
import React, {Component} from "react";

// React DOM, for rendering Class Component into DOM.
import ReactDOM from "react-dom";

// Router, Routes, Switches and Links.
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// View Components.
import WelcomingView from "./welcomingView.js";
import RegistrationView from "./registrationView.js";
import RegistrationOptions from "./registrationOptions.js";
import CalendarView from "./calendarView.js";
import CalendarOptions from "./calendarOptions";
import SubjectView from "./subjectView.js";
import HomeView from "./homeView.js";
import ArticleView from "./articleView.js";

// import * as serviceWorker from "../serviceWorker";

class SwitcherDOMComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path = "/" component = {WelcomingView} />
                        <Route exact path = "/registration" component = {RegistrationView} />
                        <Route exact path = "/options/registration" component = {RegistrationOptions} />
                        <Route exact path = "/calendar" component = {CalendarView} />
                        <Route exact path = "/options/calendar" component = {CalendarOptions} />
                        <Route exact path = "/subject" component = {SubjectView} />
                        <Route exact path = "/home" component = {HomeView} />
                        <Route exact path = "/article" component = {ArticleView} />
                    </Switch>
                </Router>
            </div>
        );
    };
}

// Exports Class Component that will render Component into the DOM.
export default SwitcherDOMComponent;


// React DOM will render Component into Root element.
ReactDOM.render(<SwitcherDOMComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
