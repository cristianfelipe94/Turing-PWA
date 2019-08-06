import React, { Component } from "react";
import "./App.css";

import loadImages from "./imagesLoader.js";

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import "./Subject.css";

class ConfigurationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarImages: [],
            userAvatar : [],
            userName : [],

            htmlSubject: false,
            cssSubject: false,
            jsSubject: false,
        };

        this.reloadRender = this.reloadRender.bind(this);
        this.pickAvatar = this.pickAvatar.bind(this)
        this.usernameKeylog = this.usernameKeylog.bind(this)
        this.submitUsername = this.submitUsername.bind(this);
        this.reloadRender = this.reloadRender.bind(this);

        this.htmlSelector = this.htmlSelector.bind(this);
        this.cssSelector = this.cssSelector.bind(this);
        this.jsSelector = this.jsSelector.bind(this);

        this.consoleLogin = this.consoleLogin.bind(this);
    };

    consoleLogin () {
        console.log(this.state);
    }

    componentDidMount() {
        const images = loadImages();
        const userAvatarStored = JSON.parse(localStorage.getItem("savedAvatar"));
        const userNameStored = JSON.parse(localStorage.getItem("savedUsername"));

        const htmlUserStored = JSON.parse(localStorage.getItem("htmlUserStored"));
        const cssUserStored = JSON.parse(localStorage.getItem("cssUserStored"));
        const jsUserStored = JSON.parse(localStorage.getItem("jsUserStored"));

        this.setState({
            avatarImages: images,
            userAvatar: userAvatarStored,
            userName: userNameStored,

            htmlSubject: htmlUserStored,
            cssSubject: cssUserStored,
            jsSubject: jsUserStored,
        });
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

    htmlSelector () {
        this.setState({htmlSubject : true, cssSubject: false, jsSubject: false, completedSubject: true});
    };

    cssSelector () {
        this.setState({htmlSubject : false, cssSubject: true, jsSubject: false, completedSubject: true});
    };

    jsSelector () {
        this.setState({htmlSubject : false, cssSubject: false, jsSubject: true, completedSubject: true});
    };

    submitUsername () {
        localStorage.setItem('savedUsername', JSON.stringify(this.state.userName));
        localStorage.setItem('savedAvatar', JSON.stringify(this.state.userAvatar));

        localStorage.setItem('htmlUserStored', JSON.stringify(this.state.htmlSubject));
        localStorage.setItem('cssUserStored', JSON.stringify(this.state.cssSubject));
        localStorage.setItem('jsUserStored', JSON.stringify(this.state.jsSubject));
    };

    reloadRender () {
        this.submitUsername ();
        setTimeout(() => {window.location.reload()}, 100);
    };

    render () {

        const gallery = this.state.avatarImages.map(({id, src, description}) => {
            return (
                <button onClick= {this.pickAvatar} className = {this.state.userAvatar.id === id? "avatarSelected" : "avatarUnselected"}>
                    <img key={id} src={src} alt={description} id={id}/>
                </button>
            );
        });

        const spriteContainer = {
            width: "151px",
            overflow: "hidden",
            height: "165px",
            position: "relative",
        };

        const subjectContainer = {
            width: "25%",
            display: "inline-block",
            padding: "5px",
            margin: "10px",
            cursor: "pointer",
        };

        return (
            <div className= "App">
                <header className= "App-header">
                    <div>
                        <h1 onClick = {this.consoleLogin}>Registration</h1>
                        {gallery}
                        <form>
                            <label htmlFor= "username">Nombre de usuario:</label>
                            <input type= "input" id= "username" onChange={this.usernameKeylog} value= {this.state.userName}></input>
                        </form>

                        <div>                
                            <h1>Elige una expecialidad</h1>
                            <div style= {subjectContainer} className = {this.state.htmlSubject? "subjectSelected" : "subjectEffect"} onClick= {this.htmlSelector}>
                                <h2>HTML</h2>
                                <p>Lenguaje de etiquetas, Contenido y estructura.</p>
                                <div style= {spriteContainer}>
                                    <img src= "./assets/subjects/subjects.png" alt= "HTML logo." />
                                </div>
                            </div>
                            
                            <div style= {subjectContainer} className = {this.state.cssSubject? "subjectSelected" : "subjectEffect"} onClick= {this.cssSelector}>
                                <h2>CSS</h2>
                                <p>Lenguaje para hojas de estilos. Estilos y apariencia.</p>
                                <div style= {spriteContainer}>
                                    <img src= "./assets/subjects/subjects.png" style= {{position: "absolute", right: "-189px"}} alt= "CSS logo." />
                                </div>
                            </div>
                            
                            <div style= {subjectContainer} className= {this.state.jsSubject? "subjectSelected" : "subjectEffect"} onClick= {this.jsSelector}>
                                <h2>Javascript</h2>
                                <p>Lenguaje de programación. Comportamiento y funcionalidad.</p>
                                <div style= {spriteContainer}>
                                    <img src= ".\assets\subjects/subjects.png" style= {{position: "absolute", right: "1px"}} alt= "Javascript logo." />
                                </div>
                            </div>

                            <Router>
                                <Link to= "/home" style = {{display: "inline-block"}} onClick= {this.reloadRender}>Terminar proceso edición de Registro</Link>
                            </Router>
                        </div>
                    </div>
                </header>
            </div>
        );
    };
};

export default ConfigurationView;