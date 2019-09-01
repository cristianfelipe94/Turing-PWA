/* eslint-disable */
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import '../css/App.css';

import dataLibrary from '../dataLibrary.json';

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
            subjectToRead: '',
            dataLibraryToRender : [],
        };
        this.reloadRender = this.reloadRender.bind(this);
        // this.consoleData = this.consoleData.bind(this);
        this.setInitialScroll = this.setInitialScroll.bind(this);
    };

    // consoleData () {
    //     console.log(this.state.subjectJS);
    //     console.log(this.state.subjectToRead);
    // };

    componentWillMount() {
        setTimeout(() => {
            const userArticleHTMLStored = JSON.parse(localStorage.getItem('savedUserHTMLArticle'));
            const userArticleCSSStored = JSON.parse(localStorage.getItem('savedUserCSSArticle'));
            const userArticleJSStored = JSON.parse(localStorage.getItem('savedUserJSArticle'));

            const userCurrentArticleStored = JSON.parse(localStorage.getItem('currenDataArticle'));
            const userToReadStored = JSON.parse(localStorage.getItem('currentsubjectToRead'));
            const userStoredData = JSON.parse(localStorage.getItem('savedDataLibrary'));

            this.setState({ currentHTMLArticle: userArticleHTMLStored });
            this.setState({ currentCSSArticle: userArticleCSSStored });
            this.setState({ currentJSArticle: userArticleJSStored });

            this.setState({ currentArticle: userCurrentArticleStored });
            this.setState({ subjectToRead: userToReadStored });
            this.setState({ dataLibraryToRender: userStoredData });
        }, 10);
    };

    componentDidMount() {
        document.getElementsByTagName('html')[0].className = "htmlBackgroundOff";
        setTimeout(() => {
          this.setInitialScroll();
        }, 500)
    }

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {
            window.location.reload();
            if(this.state.subjectToRead === 'html') {
                this.setState({
                    currentHTMLArticle: this.state.currentHTMLArticle < this.state.dataLibraryToRender.length - 1 ? this.state.currentHTMLArticle + 1 : this.state.currentArticle = 0,
                }, () => {
                    localStorage.setItem('savedUserHTMLArticle', JSON.stringify(this.state.currentHTMLArticle));
                    localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentHTMLArticle));
                    // console.log(this.state.currentHTMLArticle);
                });
            } else if (this.state.subjectToRead === 'css') {
                this.setState({
                    currentCSSArticle: this.state.currentCSSArticle < this.state.dataLibraryToRender.length - 1 ? this.state.currentCSSArticle + 1 : this.state.currentCSSArticle = 0,
                }, () => {
                    localStorage.setItem('savedUserCSSArticle', JSON.stringify(this.state.currentCSSArticle));
                    localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentCSSArticle));
                    // console.log(this.state.currentCSSArticle);
                });
            } else if (this.state.subjectToRead === 'javascript') {
                this.setState({
                    currentJSArticle: this.state.currentJSArticle < this.state.dataLibraryToRender.length - 1 ? this.state.currentJSArticle + 1 : this.state.currentJSArticle = 0,
                }, () => {
                    localStorage.setItem('savedUserJSArticle', JSON.stringify(this.state.currentJSArticle));
                    localStorage.setItem('currenDataArticle', JSON.stringify(this.state.currentJSArticle));
                    // console.log(this.state.currentJSArticle);
                });
            };
        }, 20);
    };

    setInitialScroll() {
        window.scrollTo(0, 0);
    }

    render() {

        const bodyDom = document.querySelector('body');
        bodyDom.setAttribute('class', 'bodyConfig');
        
        const desconstructedState = this.state;
        function contenidos(currentContent, articlekeytitle) {
            return (currentContent.map(content => <p key={articlekeytitle + content}> {content}</p>));
        }

       function referenciales(currentLinks, articlekeytitle) {
            return (currentLinks.map(ref => (
                    <div key= {articlekeytitle}>
                        <li style= {{listStyle: 'none', margin: '10px 0px'}}>
                            <a style= {{textDecoration: 'underline', color: '#9efda2', wordBreak: 'break-all'}} href= {ref} target= '_bank'>{ref}</a>
                        </li>
                    </div>
            )));
        }

        const currentArticleSubject = desconstructedState.dataLibraryToRender.length !== 0 ? desconstructedState.dataLibraryToRender[desconstructedState.currentArticle].subject : '';
        const currentArticleTitle = desconstructedState.dataLibraryToRender.length !== 0 ? desconstructedState.dataLibraryToRender[desconstructedState.currentArticle].title : '';
        
        const currentArticleContent = desconstructedState.dataLibraryToRender.length !== 0 ? contenidos(desconstructedState.dataLibraryToRender[desconstructedState.currentArticle].content, currentArticleTitle) : '';
        const currentArticleLinks = desconstructedState.dataLibraryToRender.length !== 0 ? referenciales(desconstructedState.dataLibraryToRender[desconstructedState.currentArticle].referencias, currentArticleTitle) : '';

        return(
            <div className= 'app-article'>
                <div style={{margin: '20px auto', width: '100%'}}>
                    <p style= {{backgroundColor: '#4dd7a3', display: 'inline-block', padding: '12px', color: 'black'}}>Actualmente leyendo de: <span style={{fontWeight: 'bold'}}>{currentArticleSubject}</span></p>
                    <h2 style= {{textTransform: 'uppercase'}}>{currentArticleTitle}</h2>
                    <p>{currentArticleContent}</p>
                    <ul style={{margin: '30px 0px', padding: '0'}}><span style={{fontWeight: 'bold'}}>Referencias y qué más leer:</span>{currentArticleLinks}</ul>
                </div>
                <div style={{margin: '20px auto'}}>
                    <Router>
                        <Link className='app-action' to= '/#/home' onClick= {this.reloadRender}>Cerrar artículo.</Link>
                    </Router>
                </div>
                <div className= 'app-developers'>
                    <p>
                    Desarrollado por:
                    </p>
                    <div className= 'app-developers-links'>
                        <a className='app-link' href='https://github.com/YethPenado' target='_blank' rel='noopener noreferrer'>
                        Yeth Penado
                        </a>
                        <p style= {{display: 'inline-block'}}>|</p>
                        <a className='app-link' href='https://github.com/cristianfelipe94' target='_blank' rel='noopener noreferrer'>
                        Cristian Calderón
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleView;
