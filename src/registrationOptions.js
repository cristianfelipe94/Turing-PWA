import React, { Component } from "react";
import "./App.css";

import loadImages from "./imagesLoader.js";

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './Calendar.css'


class RegistrationOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarImages: [],
            userAvatar : [],
            userName : [],
            completedUserSet : false
        };
        this.pickAvatar = this.pickAvatar.bind(this)
        this.usernameKeylog = this.usernameKeylog.bind(this)
        this.submitUsername = this.submitUsername.bind(this);
        this.reloadRender = this.reloadRender.bind(this);
    };

    componentDidMount() {
        const images = loadImages();
        this.setState({avatarImages: images});
    };

    pickAvatar (e) {
        const clickedAvatar = e.target;
        const id = clickedAvatar.getAttribute("id");
        const src = clickedAvatar.getAttribute("src");
        const fullUserAvatarConfig = {id, src};
        this.setState({userAvatar: fullUserAvatarConfig});
    };

    usernameKeylog (e) {
        const getUserName = e.target.value;
        this.setState({userName: getUserName});
    };

    submitUsername (event) {
        event.preventDefault();
        if (this.state.userAvatar.length || this.state.userName.length !== 0) {
            const userSubjectStored = JSON.parse(localStorage.getItem("subjectInformation"));
            const userCalendarStored = JSON.parse(localStorage.getItem("dateNotifications"));

            localStorage.clear();

            localStorage.setItem('savedUsername', JSON.stringify(this.state.userName));
            localStorage.setItem('savedAvatar', JSON.stringify(this.state.userAvatar));
            localStorage.setItem('subjectInformation', JSON.stringify(userSubjectStored));
            localStorage.setItem('dateNotifications', JSON.stringify(userCalendarStored));
            this.setState({completedUserSet: true});
        } else if (this.state.userAvatar.length || this.state.userName.length === 0)  {
            this.setState({completedUserSet: false});
            alert("Please make sure you picked a Username and Avatar.");
        };
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {window.location.reload()}, 100);
    };

    render () {
        const gallery = this.state.avatarImages.map(({id, src, description}) => {
            return (
                <button onClick= {this.pickAvatar}>
                    <img key={id} src={src} alt={description} id={id}/>
                </button>
            );
        });

        return (
            <div className= "App">
                <header className= "App-header">
                    <div>
                        <h1>Registration</h1>
                        {gallery}
                        <form>
                            <label htmlFor= "username">Nombre de usuario:</label>
                            <input type= "input" id= "username" onChange={this.usernameKeylog}></input>
                            <button onClick= {this.submitUsername}>Ingresar datos</button>
                        </form>
                        <div className = {`${this.state.completedUserSet? "openedModal" : "closedModal"}`}>
                            <Router>
                                <Link to= "/home" onClick= {this.reloadRender}>Terminar proceso edición de Registro</Link>
                            </Router>
                        </div>
                    </div>
                </header>
            </div>
        );
    };
};

export default RegistrationOptions;