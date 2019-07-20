// React Component, for building Class Component.
import React, { Component } from "react";

// Router, Routes, Switches and Links.
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// Classes from a CSS file.
import "./App.css";

// Images and Assets.
import gearLight from "./gearIcon.png";
import gearDark from "./gearIcon2.png";

class WelcomingView extends Component {

  // Class method, will Reload window for Rendering new component.
  reloadRender () {
    setTimeout(() => {window.location.reload()}, 100);
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={gearDark} style= {{height: "30vmin"}} className="App-logo" alt="logo" />
          <img src={gearLight} className="App-logo" alt="logo"/>

          <p>
            Hola, <span style={{color: "#61dafb"}} >Turing</span> te da bienvenida.
          </p>

          <Router>
            <Link to="/registration" onClick= {this.reloadRender}>Ir al proceso de Registro.</Link>
          </Router>

          <div>
            <p>
              Desarrolladores:
            </p>
            <a className="App-link" href="https://github.com/YethPenado" target="_blank" rel="noopener noreferrer">
            Yeth Penado.
            </a>
            <a className="App-link" style={{marginLeft: '20px'}} href="https://github.com/cristianfelipe94" target="_blank" rel="noopener noreferrer">
            Cristian Calderón.
            </a>
          </div>

        </header>
      </div>
    );
  };
};


export default WelcomingView;
