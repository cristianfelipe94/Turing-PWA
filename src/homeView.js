import React, {Component} from "react";

import dataLibrary from "./dataLibrary.json";

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

            subjectToRead: "",
            currentArticle: 0,

            dataLibraryToRender : []
        };

        this.reloadRender = this.reloadRender.bind(this);
    };

    componentWillMount() {
        setTimeout(() => {
            // Get username and avatar.
            const userNameStored = JSON.parse(localStorage.getItem("savedUsername"));
            const userAvatarStored = JSON.parse(localStorage.getItem("savedAvatar"));
            
            // Get Boolean, subject that was picked. 
            const htmlUserStored = JSON.parse(localStorage.getItem("htmlUserStored"));
            const cssUserStored = JSON.parse(localStorage.getItem("cssUserStored"));
            const jsUserStored = JSON.parse(localStorage.getItem("jsUserStored"));
    
            // Get current article index.
            const userArticleHTMLStored = JSON.parse(localStorage.getItem("savedUserHTMLArticle"));
            const userArticleCSSStored = JSON.parse(localStorage.getItem("savedUserCSSArticle"));
            const userArticleJSStored = JSON.parse(localStorage.getItem("savedUserJSArticle"));
    
            this.setState({
                htmlSubject: htmlUserStored,
            }, () => {
                if (htmlUserStored === true) {
                    // console.log("Test state", this.state.subjectJS);
                    this.setState({
                        subjectToRead: "html"
                    }, () => {
                        // console.log("Test state", this.state.subjectToRead);
                        this.setState({
                            currentArticle: userArticleHTMLStored
                        }, () => {
                            localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentArticle));
                            localStorage.setItem('currentsubjectToRead', JSON.stringify(this.state.subjectToRead));
                        });
                    });
                };
            });
    
            this.setState({
                cssSubject: cssUserStored
            }, () => {
                if (cssUserStored === true) {
                    // console.log("Test state", this.state.subjectJS);
                    this.setState({
                        subjectToRead: "css"
                    }, () => {
                        // console.log("Test state", this.state.subjectToRead);
                        this.setState({
                            currentArticle: userArticleCSSStored
                        }, () => {
                            localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentArticle));
                            localStorage.setItem('currentsubjectToRead', JSON.stringify(this.state.subjectToRead));
                        });
                    });
                };
            });
    
            this.setState({
                jsSubject: jsUserStored,
            }, () => {
                if (jsUserStored === true) {
                    // console.log("Test state", this.state.subjectJS);
                    this.setState({
                        subjectToRead: "javascript"
                    }, () => {
                        // console.log("Test state", this.state.subjectToRead);
                        this.setState({
                            currentArticle: userArticleJSStored
                        }, () => {
                            localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentArticle));
                            localStorage.setItem('currentsubjectToRead', JSON.stringify(this.state.subjectToRead));
                        });
                    });
                };
            });
    
            this.setState({
                userName: userNameStored,
                userAvatar: userAvatarStored,
            });
        }, 10);
    };

    componentDidMount () {
        setTimeout(() => {
            this.renderLibrary();
        }, 20);
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {window.location.reload()}, 100);
    };

    renderLibrary() {
        dataLibrary.articles.forEach(element => {
            if (element.subject === this.state.subjectToRead) {
                this.setState({
                    dataLibraryToRender: this.state.dataLibraryToRender.concat(element)
                }, () => {
                    // console.log("Found match: ",element, this.state.dataLibraryToRender);
                    localStorage.setItem('savedDataLibrary', JSON.stringify(this.state.dataLibraryToRender));
                });
            };
        });
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