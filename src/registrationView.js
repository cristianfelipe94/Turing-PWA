import React, { Component } from "react";
import "./App.css";
import "./Subject.css";

import loadImages from "./imagesLoader.js";

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';


class RegistrationView extends Component {
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
            localStorage.clear();
            localStorage.setItem('savedUsername', JSON.stringify(this.state.userName));
            localStorage.setItem('savedAvatar', JSON.stringify(this.state.userAvatar));
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
        const avatarSelectedId = this.state.userAvatar.id;
        const gallery = this.state.avatarImages.map(({id, src, description}) => {
            return (
                <button key={"button"+id} onClick= {this.pickAvatar} className = {avatarSelectedId !== id? "avatarUnselected, avatar-btn" : "avatarSelected,  avatar-btn"}>
                    <img key={id} src={src} alt={description} id={id}/>
                </button>
            );
        });

        return (
            <div className= "app-registration">
                <div>
                    <h1>Elige un avatar</h1>
                    <div className= "app-avatar-content">
                        {gallery}
                    </div>
                    <form style= {{padding: "20px"}}>
                        <label htmlFor= "username" style= {{display: "block", padding: "10px"}}>Elige un nombre de usuario:</label>
                        <input type= "input" id= "username" onChange={this.usernameKeylog} placeholder= "Escribe tu nombre de usuario aquí" className= "username-input"></input>
                        <button className="app-action" style= {{border: "none", textTransform: "unset", margin: "15px 0"}}onClick= {this.submitUsername}>Registrarme</button>
                    </form>
                    <div className = {`${this.state.completedUserSet? "openedModal" : "closedModal"}`}>
                        <Router>
                            <Link to= "/subject" onClick= {this.reloadRender}>Terminar proceso de Registro</Link>
                        </Router>
                    </div>
                    <div className= "app-developers">
                        <p>
                        Desarrollado por:
                        </p>
                        <div className= "app-developers-links">
                        <a className="app-link" href="https://github.com/YethPenado" target="_blank" rel="noopener noreferrer">
                        Yeth Penado.
                        </a>
                        <a className="app-link" style={{marginLeft: '20px'}} href="https://github.com/cristianfelipe94" target="_blank" rel="noopener noreferrer">
                        Cristian Calderón.
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default RegistrationView;