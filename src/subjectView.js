import React, {Component} from "react";

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

import "./Subject.css";

class SubjectView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            htmlSubject: false,
            cssSubject: false,
            jsSubject: false,
            completedSubject: false,
        };
        this.htmlSelector = this.htmlSelector.bind(this);
        this.cssSelector = this.cssSelector.bind(this);
        this.jsSelector = this.jsSelector.bind(this);

        this.reloadRender = this.reloadRender.bind(this);
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

    reloadRender () {
        this.submitSubject ();
        setTimeout(() => {window.location.reload()}, 100);
    };

    submitSubject () {
        localStorage.setItem('htmlUserStored', JSON.stringify(this.state.htmlSubject));
        localStorage.setItem('cssUserStored', JSON.stringify(this.state.cssSubject));
        localStorage.setItem('jsUserStored', JSON.stringify(this.state.jsSubject));

        localStorage.setItem('savedUserHTMLArticle', JSON.stringify(0));
        localStorage.setItem('savedUserCSSArticle', JSON.stringify(0));
        localStorage.setItem('savedUserJSArticle', JSON.stringify(0));
    };

    render () {
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
                
                <div style= {subjectContainer} className = {this.state.jsSubject? "subjectSelected" : "subjectEffect"} onClick= {this.jsSelector}>
                    <h2>Javascript</h2>
                    <p>Lenguaje de programación. Comportamiento y funcionalidad.</p>
                    <div style= {spriteContainer}>
                        <img src= "./assets/subjects/subjects.png" style= {{position: "absolute", right: "1px"}} alt= "Javascript logo." />
                    </div>
                </div>

                <div className = {`${this.state.completedSubject? "openedModal" : "closedModal"}`}>
                    <Router>
                        <Link to= "/home" onClick= {this.reloadRender}>Todo listo.</Link>
                    </Router>
                </div>

            </div>
        );
    };
};

export default SubjectView;