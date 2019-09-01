/* eslint-disable */
// React Component, for building Class Component.
import React, { Component } from 'react';

// Router, Routes, Switches and Links.
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

// Classes from a CSS file.
import '../css/App.css';

class WelcomingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSigned: false,
    };
    this.welcomeDecide = this.welcomeDecide.bind(this);
    this.setInitialScroll = this.setInitialScroll.bind(this);
  }

  componentDidMount() {
    document.getElementsByTagName('html')[0].className = "htmlBackgroundOff";
    if (!localStorage.length) {
      this.setState({ userSigned: false });
    } else if (localStorage.length > 0) {
      this.setState({ userSigned: true });
    }
    setTimeout(() => {
      this.setInitialScroll();
    }, 500)
  }

  welcomeDecide() {
    localStorage.clear();
    console.log('Clear storage');
    console.log('access localStorage: ', localStorage);
  }
  
  // Class method, will Reload window for Rendering new component.
  reloadRender(e) {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  setInitialScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="app">

        <div className="app-header">
          <p className="app-subtitle" onClick={this.welcomeDecide}>
            Bienvenido a
          </p>
          <h1 className="app-title">Turing</h1>
        </div>

        <div className="app-content">
          <h2>
            Aprende a tu ritmo
          </h2>
          <p>
            <span style={{ textTransform: 'uppercase' }}>Turing </span>
              es una biblioteca dedicada a la enseñanza del Diseño y Desarrollo Web.
          </p>
          <p>
            Elige las materias de tu interés y nosotros nos encargamos de brindarte los mejores recursos para tu aprendizaje.
          </p>
        </div>

        <Router>
          <Link className="app-action" to={`${this.state.userSigned ? '/#/home' : '/#/registration'}`} onClick={this.reloadRender}>Iniciar</Link>
        </Router>

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


export default WelcomingView;
