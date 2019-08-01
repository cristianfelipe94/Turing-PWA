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
            currentArticle: 0
        };
        this.reloadRender = this.reloadRender.bind(this);
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {window.location.reload()}, 100);
    };

    render() {

        const processedData = dataLibrary.articles.map(({subject, title, content, referencias}) =>{
            const referenciales = referencias.map((ref) => {
                return (
                    <div>
                        <li>
                            <a href= {ref} target= "_bank">{ref}</a>
                        </li>
                    </div>
                );
            });
            return (
                <div>
                    <h2>{subject}</h2>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    
                    <ul>{referenciales}</ul>
                </div>
            );
        });

        return(
            <div>
                <h1 onClick= {this.consoleData}>Article Title</h1>
                <p>This is an article please read this instructions and read the article, at the buttom you will see a bottom to save it as important or to close article.</p>
                <div>
                {processedData}
                </div>
                <Router>
                    <Link to= "/home" onClick= {this.reloadRender}>Terminar de leer el artículo.</Link>
                </Router>
            </div>
        );
    };
};

export default ArticleView;