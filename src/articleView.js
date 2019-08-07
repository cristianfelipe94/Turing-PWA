import React, {Component} from 'react';

import dataLibrary from "./dataLibrary.json";

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

class ArticleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHTMLArticle: 0,
            currentCSSArticle: 0,
            currentJSArticle: 0,
            currentArticle: 0,
            subjectHTML: false,
            subjectCSS : false,
            subjectJS : false,
            subjectToRead: "",
            dataLibraryToRender : []
        };
        this.reloadRender = this.reloadRender.bind(this);
        this.consoleData = this.consoleData.bind(this);
    };

    consoleData () {
        console.log(this.state.subjectJS);
        console.log(this.state.subjectToRead);
    };

    componentWillMount() {
        setTimeout(() => {
            const userArticleHTMLStored = JSON.parse(localStorage.getItem("savedUserHTMLArticle"));
            const userArticleCSSStored = JSON.parse(localStorage.getItem("savedUserCSSArticle"));
            const userArticleJSStored = JSON.parse(localStorage.getItem("savedUserJSArticle"));

            const userCurrentArticleStored = JSON.parse(localStorage.getItem("currenDataArticle"));
            const userToReadStored = JSON.parse(localStorage.getItem("currentsubjectToRead"));
            const userStoredData = JSON.parse(localStorage.getItem("savedDataLibrary"));

            this.setState({currentHTMLArticle: userArticleHTMLStored});
            this.setState({currentCSSArticle: userArticleCSSStored});
            this.setState({currentJSArticle: userArticleJSStored});

            this.setState({currentArticle: userCurrentArticleStored});
            this.setState({subjectToRead: userToReadStored});
            this.setState({dataLibraryToRender: userStoredData}); 
        }, 10);
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {
            window.location.reload();
            if(this.state.subjectToRead === "html") {
                this.setState({
                    currentHTMLArticle: this.state.currentHTMLArticle < this.state.dataLibraryToRender.length - 1? this.state.currentHTMLArticle + 1 : this.state.currentArticle = 0
                }, () => {
                    localStorage.setItem('savedUserHTMLArticle', JSON.stringify(this.state.currentHTMLArticle));
                    localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentHTMLArticle));
                    // console.log(this.state.currentHTMLArticle);
                });
            } else if (this.state.subjectToRead === "css") {
                this.setState({
                    currentCSSArticle: this.state.currentCSSArticle < this.state.dataLibraryToRender.length - 1? this.state.currentCSSArticle + 1 : this.state.currentCSSArticle = 0,
                }, () => {
                    localStorage.setItem('savedUserCSSArticle', JSON.stringify(this.state.currentCSSArticle));
                    localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentCSSArticle));
                    // console.log(this.state.currentCSSArticle);
                });
            } else if (this.state.subjectToRead === "javascript") {
                this.setState({
                    currentJSArticle: this.state.currentJSArticle < this.state.dataLibraryToRender.length - 1? this.state.currentJSArticle + 1 : this.state.currentJSArticle = 0,
                }, () => {
                    localStorage.setItem('savedUserJSArticle', JSON.stringify(this.state.currentJSArticle));
                    localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentJSArticle));
                    // console.log(this.state.currentJSArticle);
                });
            };
        }, 20);
    };

    render() {
        const currentArticleSubject = this.state.dataLibraryToRender.length !== 0 ? this.state.dataLibraryToRender[this.state.currentArticle].subject : "" ;
        const currentArticleTitle = this.state.dataLibraryToRender.length !== 0 ? this.state.dataLibraryToRender[this.state.currentArticle].title : "" ;
        
        const currentArticleContent = this.state.dataLibraryToRender.length !== 0 ? this.state.dataLibraryToRender[this.state.currentArticle].content : "" ;
        const currentArticleLinks = this.state.dataLibraryToRender.length !== 0 ? referenciales (this.state.dataLibraryToRender[this.state.currentArticle].referencias, currentArticleTitle) : "" ;

       function referenciales (currentArticleLinks, articlekeytitle) {
            return (currentArticleLinks.map((ref) => {
                return (
                    <div key= {articlekeytitle}>
                        <li style= {{listStyle: "none", margin: "10px 0px"}}>
                            <a style= {{textDecoration: "underline", color: "white"}} href= {ref} target= "_bank">{ref}</a>
                        </li>
                    </div>
                );
            }));
        };

        return(
            <div className= "app-article">
                <div>
                    <p>Actualmente leyendo de: <span style={{fontWeight: "bold"}}>{currentArticleSubject}</span></p>
                    <h2 style= {{textTransform: "uppercase"}}>{currentArticleTitle}</h2>
                    <p>{currentArticleContent}</p>
                    <ul style={{margin: "30px 0px", padding: "0"}}><span style={{fontWeight: "bold"}}>Referencias y qué más leer:</span>{currentArticleLinks}</ul>
                </div>
                <div>
                    <Router>
                        <Link className="app-action" to= "/home" onClick= {this.reloadRender}>Cerrar artículo.</Link>
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

export default ArticleView;