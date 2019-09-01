/* eslint-disable */
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import '../css/App.css';

import '../css/Subject.css';

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
    this.setInitialScroll = this.setInitialScroll.bind(this);
  }

  componentDidMount() {
    document.getElementsByTagName('html')[0].className = "htmlBackgroundOff";
    setTimeout(() => {
      this.setInitialScroll();
    }, 500)
  }

  htmlSelector() {
    this.setState({
      htmlSubject: true, cssSubject: false, jsSubject: false, completedSubject: true,
    });
  }

  cssSelector() {
    this.setState({
      htmlSubject: false, cssSubject: true, jsSubject: false, completedSubject: true,
    });
  }

  jsSelector() {
    this.setState({
      htmlSubject: false, cssSubject: false, jsSubject: true, completedSubject: true,
    });
  }

  reloadRender() {
    this.submitSubject();
    setTimeout(() => { window.location.reload(); }, 100);
  }

  submitSubject() {
    localStorage.setItem('htmlUserStored', JSON.stringify(this.state.htmlSubject));
    localStorage.setItem('cssUserStored', JSON.stringify(this.state.cssSubject));
    localStorage.setItem('jsUserStored', JSON.stringify(this.state.jsSubject));

    localStorage.setItem('savedUserHTMLArticle', JSON.stringify(0));
    localStorage.setItem('savedUserCSSArticle', JSON.stringify(0));
    localStorage.setItem('savedUserJSArticle', JSON.stringify(0));
  }

  setInitialScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    const bodyDom = document.querySelector('body');
    bodyDom.setAttribute('class', 'bodyConfig');

    const subjectContainer = {
      width: '180px',
      display: 'inline-block',
      padding: '5px',
      margin: '10px',
      cursor: 'pointer',
      height: '180px',
      borderRadius: '50%',
      float: 'left',
    };

    const subjectIcon = {
      width: '60px',
      margin: '0 60px',
    };

    const subjectFlex = {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px auto',
    }

    return (
      <div className="app-subject">
        <div>
          <h1 style={{ textAlign: 'center' }}>
                        Elige la materia que te interesa estudiar
          </h1>
          <div style={{ margin: '40px 40px 10px' }}>
            <p>
              <span style={{ fontWeight: 'bold' }}>Consejo: </span>
              {' '}
Si eres un estudiante principiante, te recomendamos empezar por estudiar HTML, luego CSS y finalmente Javascript.
            </p>
            <p>
                            Si no estás segur@ de tu nivel de conocimiento, o deseas cambiar de materia más adelante, ¡no te preocupes! Siempre puedes cambiar tus ajustes en la sección de Configuración.
            </p>
          </div>
        </div>
        <div style={subjectFlex}>
          <div style={subjectContainer} className={this.state.htmlSubject ? 'subjectSelected' : 'subjectEffect'} onClick={this.htmlSelector}>
            <h2 style={{ textAlign: 'center', margin: '15px 0px 5px', fontSize: '20px' }}>HTML</h2>
            <p style={{ textAlign: 'center', padding: '10px', margin: '0' }}>Lenguaje de etiquetas</p>
            <img src="./assets/subjects/html.png" alt="HTML logo." style={subjectIcon} />
          </div>

          <div style={subjectContainer} className={this.state.cssSubject ? 'subjectSelected' : 'subjectEffect'} onClick={this.cssSelector}>
            <h2 style={{ textAlign: 'center', margin: '15px 0px 5px', fontSize: '20px' }}>CSS</h2>
            <p style={{ textAlign: 'center', padding: '10px', margin: '0' }}>Lenguaje para hojas de estilos</p>
            <img src="./assets/subjects/css.png" alt="CSS logo." style={subjectIcon} />
          </div>

          <div style={subjectContainer} className={this.state.jsSubject ? 'subjectSelected' : 'subjectEffect'} onClick={this.jsSelector}>
            <h2 style={{ textAlign: 'center', margin: '15px 0px 5px', fontSize: '20px' }}>Javascript</h2>
            <p style={{ textAlign: 'center', padding: '10px', margin: '0' }}>Lenguaje de programación</p>
            <img src="./assets/subjects/js.png" alt="Javascript logo." style={subjectIcon} />
          </div>
        </div>

        <div className={`${this.state.completedSubject ? 'openedModal' : 'closedModal'}`}>
          <Router>
            <Link className="app-action" to="/#/home" onClick={this.reloadRender}>Todo listo</Link>
          </Router>
        </div>

        <div className="app-developers">
          <p>
                    Desarrollado por:
          </p>
          <div className="app-developers-links">
            <a className="app-link" href="https://github.com/YethPenado" target="_blank" rel="noopener noreferrer">
                    Yeth Penado
            </a>
            <p style={{ display: 'inline-block' }}>|</p>
            <a className="app-link" href="https://github.com/cristianfelipe94" target="_blank" rel="noopener noreferrer">
                    Cristian Calderón
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectView;
