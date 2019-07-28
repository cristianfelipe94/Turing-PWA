// React Component, for building Class Component.
import React, { Component } from "react";

// Router, Routes, Switches and Links.
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

// Classes from a CSS file.
import "./App.css";

// Images and Assets.
import gearLight from "./gearIcon.png";
import gearDark from "./gearIcon2.png";

class WelcomingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSigned: false
    }
    this.welcomeDecide = this.welcomeDecide.bind(this);
  }

  // Class method, will Reload window for Rendering new component.
  reloadRender () {
    setTimeout(() => {window.location.reload()}, 100);
  };

  componentDidMount() {
    if(!localStorage.length) {
      this.setState({userSigned: false})
    } else if (localStorage.length > 0) {
      this.setState({userSigned: true})
    };
  }

  welcomeDecide () {
    // console.log(localStorage);
    // console.log(this.state.userSigned);
    localStorage.clear();
    console.log("Clear storage");
    console.log("access localStorage: ", localStorage);
  };

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={gearDark} style= {{height: "30vmin"}} className="App-logo" alt="logo" />
          <img src={gearLight} className="App-logo" alt="logo"/>

          <p>
            Hola, <span style={{color: "#61dafb"}} onClick={this.welcomeDecide}>Turing</span> te da bienvenida.
          </p>

          <Router>
            <Link to= {`${this.state.userSigned? "/home" : "/registration"}`} onClick= {this.reloadRender}>Ir al proceso de Registro.</Link>
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
