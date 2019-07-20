import React, { Component } from "react";
import "./App.css";

import loadImages from "./imagesLoader.js";

class RegistrationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarImages: [],
            userAvatar : [],
            userName : []
        };
        this.pickAvatar = this.pickAvatar.bind(this)
        this.usernameKeylog = this.usernameKeylog.bind(this)
        this.submitUsername = this.submitUsername.bind(this);
    };

    componentDidMount() {
        const images = loadImages();
        this.setState({avatarImages: images});
    };

    pickAvatar (e) {
        const clickedAvatar = e.target;
        const id = clickedAvatar.getAttribute("id");
        const src = clickedAvatar.getAttribute("src");
        const fullUserAvatarConfig = {id, src};
        this.setState({userAvatar: fullUserAvatarConfig});
    };

    usernameKeylog (e) {
        const getUserName = e.target.value;
        this.setState({userName: getUserName});
    };

    submitUsername (event) {

        console.log(this.state.userName.length);
        event.preventDefault();
        if (this.state.userName.src && !this.state.userAvatar > "") {
            localStorage.clear();
            localStorage.setItem('savedUsername', JSON.stringify(this.state.userName));
            localStorage.setItem('savedAvatar', JSON.stringify(this.state.userAvatar));
        } else {
            alert("Please make sure you picked a Username and Avatar.");
        };

    };

    render () {
        console.log(this.state);
        console.log(localStorage);
        const gallery = this.state.avatarImages.map(({id, src, description}) => {
            return (
                <button onClick= {this.pickAvatar}>
                    <img key={id} src={src} alt={description} id={id}/>
                </button>
            );
        });

        return (
            <div className= "App">
                <header className= "App-header">
                    <div>
                        <h1>Registration</h1>
                        {gallery}
                        <form>
                            <label htmlFor= "username">Nombre de usuario:</label>
                            <input type= "input" id= "username" onChange={this.usernameKeylog}></input>
                            <button onClick= {this.submitUsername}>Crear usuario</button>
                        </form>
                    </div>
                </header>
            </div>
        );
    };
};

export default RegistrationView;