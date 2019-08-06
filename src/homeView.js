import React, {Component} from "react";

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import "./Home.css";

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: false,
            userAvatar: false,

            htmlSubject: false,
            cssSubject: false,
            jsSubject: false,
        };

        this.reloadRender = this.reloadRender.bind(this);
    };

    componentDidMount() {
        const userNameStored = JSON.parse(localStorage.getItem("savedUsername"));
        const userAvatarStored = JSON.parse(localStorage.getItem("savedAvatar"));

        const htmlUserStored = JSON.parse(localStorage.getItem("htmlUserStored"));
        const cssUserStored = JSON.parse(localStorage.getItem("cssUserStored"));
        const jsUserStored = JSON.parse(localStorage.getItem("jsUserStored"));

        this.setState({
            userName: userNameStored,
            userAvatar: userAvatarStored,
            htmlSubject: htmlUserStored,
            cssSubject: cssUserStored,
            jsSubject: jsUserStored,
        });
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {window.location.reload()}, 100);
    };

    render() {

        const subjectTitle = (
            this.state.htmlSubject ? "HTML" : 
            this.state.cssSubject ? "CSS" : 
            this.state.jsSubject ? "JS" : "No se detectó ninguna elección.");

        return(
            <div>
                <h1>
                    Home View.
                </h1>
                <p>
                    Acabas de completar el proceso de registro, Felicidades.
                </p>
                <h2>Nombre de usuario: {this.state.userName}</h2>
                <img src= {this.state.userAvatar.src} alt= "User avatar." />
                <h3>Elegiste como materia: {subjectTitle}</h3>
                <div>
                    <Router>
                        <Link to= "/configuration" onClick= {this.reloadRender}>Editar Nombre de Usuario</Link>
                        <br/>
                        <Link to= "/article" onClick= {this.reloadRender}>Leer artículo</Link>
                    </Router>
                </div>
            </div>
        );
    };
};

export default HomeView;