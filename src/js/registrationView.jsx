/* eslint-disable */
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import '../css/App.css';
import '../css/Subject.css';

import loadImages from './imagesLoader';

class RegistrationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarImages: [],
      userAvatar: [],
      userName: [],
    };
    this.pickAvatar = this.pickAvatar.bind(this);
    this.usernameKeylog = this.usernameKeylog.bind(this);
    this.submitUsername = this.submitUsername.bind(this);
    this.reloadRender = this.reloadRender.bind(this);
    this.setInitialScroll = this.setInitialScroll.bind(this);
  }

  componentDidMount() {
    document.getElementsByTagName('html')[0].className = "htmlBackgroundOn";
    const images = loadImages();
    this.setState({ avatarImages: images });
    setTimeout(() => {
      this.setInitialScroll();
    }, 500)
  }

  pickAvatar(e) {
    const clickedAvatar = e.target;
    const id = clickedAvatar.getAttribute('id');
    const src = clickedAvatar.getAttribute('src');
    const fullUserAvatarConfig = { id, src };
    this.setState({ userAvatar: fullUserAvatarConfig });
  }

  usernameKeylog(e) {
    const getUserName = e.target.value;
    this.setState({ userName: getUserName });
  }

  submitUsername() {
    if (this.state.userAvatar.length || this.state.userName.length !== 0) {
      localStorage.clear();
      localStorage.setItem('savedUsername', JSON.stringify(this.state.userName));
      localStorage.setItem('savedAvatar', JSON.stringify(this.state.userAvatar));
      this.reloadRender();
    } else if (this.state.userAvatar.length || this.state.userName.length === 0) {
      alert('Please make sure you picked a Username and Avatar.');
    }
  }

  // Class method, will Reload window for Rendering new component.
  reloadRender() {
    setTimeout(() => { window.location.reload(); }, 100);
  }

  setInitialScroll() {
    window.scrollTo(0, 0);
  }

  render() {
    const avatarSelectedId = this.state.userAvatar.id;
    const gallery = this.state.avatarImages.map(({ id, src, description }) => (
      <button key={`button${id}`} onClick={this.pickAvatar} className={avatarSelectedId !== id ? 'avatarUnselected, avatar-btn' : 'avatarSelected,  avatar-btn'}>
        <img key={id} src={src} alt={description} id={id} className="avatar-icons" />
      </button>
    ));

    return (
      <div className="app-registration">
        <h1 style={{ fontSize: '1.8em' }}>Elige un avatar</h1>
        <div className="app-avatar-content">
          {gallery}
        </div>
        <form style={{ padding: '20px' }}>
          <label
            htmlFor="username"
            style={{
              display: 'block', padding: '10px', fontSize: '1.4em', fontWeight: 'bold',
            }}
          >
Elige un nombre de usuario:
          </label>
          <input type="input" id="username" onChange={this.usernameKeylog} placeholder="Escribe tu nombre de usuario aquí" className="username-input" />
          <Router>
            <Link className="app-steps" to="/#/subject" onClick={this.submitUsername}>Registrarme</Link>
          </Router>
        </form>
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

export default RegistrationView;
