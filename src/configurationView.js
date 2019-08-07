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

    };

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
        const avatarSelectedId = this.state.userAvatar.id;
        const gallery = this.state.avatarImages.map(({id, src, description}) => {
            return (
                <button key={"button"+id} onClick= {this.pickAvatar} className = {avatarSelectedId !== id? "avatarUnselected, avatar-btn" : "avatarSelected,  avatar-btn"}>
                    <img key={id} src={src} alt={description} id={id}/>
                </button>
            );
        });

        const subjectContainer = {
            width: "180px",
            display: "inline-block",
            padding: "5px",
            margin: "10px",
            cursor: "pointer",
            height: "180px",
            borderRadius: "50%",
            float: "left",
        };

        const subjectIcon = {
            width: "60px",
            margin: "0 60px",
        }

        return (
            <div className= "app-configuration">
                <h1>Configuración</h1>
                <img src= {this.state.userAvatar.src} alt= "User avatar." style= {{width: "80px"}} />
                <div>
                    {gallery}
                </div>
                <form style= {{padding: "20px"}}>
                    <label htmlFor= "username" style= {{display: "block", padding: "10px", fontSize: "1.4em", fontWeight: "bold"}}>Cambiar nombre de usuario:</label>
                    <input type= "input" id= "username" onChange={this.usernameKeylog} value= {this.state.userName} style= {{backgroundColor: "transparent",border: "none", borderBottom: "1px solid white", color: "white", width: "100%", fontSize: "16px"}}></input>
                </form>
                <div>
                    <div style= {subjectContainer} className = {this.state.htmlSubject? "subjectSelected" : "subjectEffect"} onClick= {this.htmlSelector}>
                        <h2 style= {{textAlign: "center", margin: "15px 0px 5px", fontSize: "20px"}}>HTML</h2>
                        <p style = {{textAlign: "center", padding: "10px", margin: "0"}}>Lenguaje de etiquetas</p>
                        <img src= "./assets/subjects/html.png" alt= "HTML logo." style= {subjectIcon} />
                    </div>
                    
                    <div style= {subjectContainer} className = {this.state.cssSubject? "subjectSelected" : "subjectEffect"} onClick= {this.cssSelector}>
                        <h2 style= {{textAlign: "center", margin: "15px 0px 5px", fontSize: "20px"}}>CSS</h2>
                        <p style = {{textAlign: "center", padding: "10px", margin: "0"}}>Lenguaje para hojas de estilos</p>
                        <img src= "./assets/subjects/css.png" alt= "CSS logo." style= {subjectIcon}/>
                    </div>
                    
                    <div style= {subjectContainer} className = {this.state.jsSubject? "subjectSelected" : "subjectEffect"} onClick= {this.jsSelector}>
                        <h2 style= {{textAlign: "center", margin: "15px 0px 5px", fontSize: "20px"}}>Javascript</h2>
                        <p style = {{textAlign: "center", padding: "10px", margin: "0"}}>Lenguaje de programación</p>
                        <img src= "./assets/subjects/js.png" alt= "Javascript logo." style= {subjectIcon}/>
                    </div>
                </div>
                <div>                
                    <Router>
                        <Link to= "/home" className="app-action" style = {{display: "inline-block"}}onClick= {this.reloadRender}>Guardar y salir</Link>
                    </Router>
                </div>
                <div className= "app-developers">
                    <p>
                    Desarrollado por:
                    </p>
                    <div className= "app-developers-links">
                    <a className="app-link" href="https://github.com/YethPenado" target="_blank" rel="noopener noreferrer">
                    Yeth Penado
                    </a>
                    <p style= {{display: "inline-block"}}>|</p>
                    <a className="app-link" href="https://github.com/cristianfelipe94" target="_blank" rel="noopener noreferrer">
                    Cristian Calderón
                    </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default ConfigurationView;