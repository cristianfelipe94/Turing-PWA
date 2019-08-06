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
            subjectHTML: false,
            subjectCSS : false,
            subjectJS : false,
            subjectToRead: "",
            dataLibraryToRender : []
        };
        this.reloadRender = this.reloadRender.bind(this);
        this.renderLibrary = this.renderLibrary.bind(this);
        this.consoleData = this.consoleData.bind(this);
    };

    consoleData () {
        console.log(this.state);
    }

    componentDidMount() {
        const subjectSavedCSS = JSON.parse(localStorage.getItem("cssUserStored"));
        const subjectSavedHTML = JSON.parse(localStorage.getItem("htmlUserStored"));
        const subjectSavedJS = JSON.parse(localStorage.getItem("jsUserStored"));

        this.setState({
            subjectHTML: subjectSavedHTML,
            subjectCSS: subjectSavedCSS,
            subjectJS: subjectSavedJS,
        });

        if (this.state.subjectHTML === true) {
            this.setState({subjectToRead: "html"});
        } else if (this.state.subjectCSS === true) {
            this.setState({subjectToRead: "css"});
        } else if (this.state.subjectJS === true) {
            this.setState({subjectToRead: "javascript"});
        };

        const userArticleHTMLStored = JSON.parse(localStorage.getItem("savedUserHTMLArticle"));
        const userArticleCSSStored = JSON.parse(localStorage.getItem("savedUserCSSArticle"));
        const userArticleJSStored = JSON.parse(localStorage.getItem("savedUserJSArticle"));
        this.setState({currentHTMLArticle: userArticleHTMLStored});
        this.setState({currentCSSArticle: userArticleCSSStored});
        this.setState({currentJSArticle: userArticleJSStored});

        this.renderLibrary();
    };

    renderLibrary() {
        dataLibrary.articles.forEach(element => {
            console.log(this.state.subjectToRead);
            if (element.subject === this.state.subjectToRead) {
                
                console.log(dataLibrary);
            }
        });
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {
            window.location.reload();
            if(this.state.subjectToRead === "html") {
                this.setState({
                    currentHTMLArticle: this.state.currentHTMLArticle < dataLibrary.articles.length - 1? this.state.currentHTMLArticle + 1 : this.state.currentArticle = 0
                });
            } else if (this.state.subjectToRead === "css") {
                this.setState({
                    currentCSSArticle: this.state.currentCSSArticle < dataLibrary.articles.length - 1? this.state.currentCSSArticle + 1 : this.state.currentCSSArticle = 0,
                });
            } else if (this.state.subjectToRead === "js") {
                this.setState({
                    currentJSArticle: this.state.currentJSArticle < dataLibrary.articles.length - 1? this.state.currentJSArticle + 1 : this.state.currentJSArticle = 0,
                });
            };
            localStorage.setItem('savedUserHTMLArticle', JSON.stringify(this.state.currentHTMLArticle));
            localStorage.setItem('savedUserCSSArticle', JSON.stringify(this.state.currentCSSArticle));
            localStorage.setItem('savedUserJSArticle', JSON.stringify(this.state.currentJSArticle));
        }, 0);
    };

    render() {
        // const currentArticleSubject = dataLibrary.articles[this.state.currentArticle].subject;
        // const currentArticleTitle = dataLibrary.articles[this.state.currentArticle].title;
        // const currentArticleContent = dataLibrary.articles[this.state.currentArticle].content;
        // const currentArticleLinks = dataLibrary.articles[this.state.currentArticle].referencias;

    //    const referenciales = currentArticleLinks.map((ref) => {
    //         return (
    //             <div>
    //                 <li>
    //                     <a href= {ref} target= "_bank">{ref}</a>
    //                 </li>
    //             </div>
    //         );
    //     });

        return(
            <div>
                <h1 onClick= {this.consoleData}>Article Title</h1>
                <p>This is an article please read this instructions and read the article, at the buttom you will see a bottom to save it as important or to close article.</p>
                {/* <div>
                    <h2>{currentArticleSubject}</h2>
                    <h2>{currentArticleTitle}</h2>
                    <p>{currentArticleContent}</p>
                    
                    <ul>{referenciales}</ul>
                </div> */}
                <Router>
                    <Link to= "/home" onClick= {this.reloadRender}>Terminar de leer el artículo.</Link>
                </Router>
            </div>
        );
    };
};

export default ArticleView;