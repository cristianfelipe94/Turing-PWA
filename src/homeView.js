import React, {Component} from "react";

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import "./Home.css";

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: false,
            userAvatar: false,
            userSubject: false,
            userCalendar: false,
        };

        this.getterSubject = this.getterSubject.bind(this);
        this.getterCalendar = this.getterCalendar.bind(this);
        this.reloadRender = this.reloadRender.bind(this);
        
    };

    componentDidMount() {
        const userNameStored = JSON.parse(localStorage.getItem("savedUsername"));
        const userAvatarStored = JSON.parse(localStorage.getItem("savedAvatar"));
        const userSubjectStored = JSON.parse(localStorage.getItem("subjectInformation"));
        const userCalendarStored = JSON.parse(localStorage.getItem("dateNotifications"));

        this.setState({
            userName: userNameStored,
            userAvatar: userAvatarStored,
            userSubject: userSubjectStored,
            userCalendar: userCalendarStored,
        });
    };

    getterSubject() {
        const subjectObject = this.state.userSubject;
        for (const key in subjectObject) {
            if (subjectObject.hasOwnProperty(key)) {
                const element = subjectObject[key];
                if (element === true && key !== "completedSubject" ) {
                    return key;
                };
            };
        };
    };

    getterCalendar() {
        const calendarObject = this.state.userCalendar;
        const calendarDays = [];
        for (const date in calendarObject) {
            if (calendarObject.hasOwnProperty(date)) {
                const value = calendarObject[date];
                if(date !== "completedCalendar") {
                    calendarDays.push({date, value});
                };
            };
        };
        return calendarDays;
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {window.location.reload()}, 100);
    };

    render() {

        const calendarArray = this.getterCalendar();
        const calendarRender = calendarArray.map(({date, value}) => {
            return (
                <li key= {`dia${date}`} id= {`dia${date}`} className= {`marked${value}`}>{date}</li>
            );
        });

        return(
            <div>
                <h1 onClick= {this.getterCalendar}>
                    Home View.
                </h1>
                <p>
                    Acabas de completar el proceso de registro, Felicidades.
                </p>
                <h2>Nombre de usuario: {this.state.userName}</h2>
                <img src= {this.state.userAvatar.src} alt= "User avatar." />
                <h3>Elegiste como materia: {this.getterSubject()}</h3>
                <ul className= "listCalendar">
                    {calendarRender}
                </ul>
                <div>
                    <Router>
                        <Link to= "/options/calendar" onClick= {this.reloadRender}>Cambiar Calendario</Link>
                        <br/>
                        <Link to= "/options/registration" onClick= {this.reloadRender}>Editar Nombre de Usuario</Link>
                        <br/>
                        <Link to= "/options/subject" onClick= {this.reloadRender}>Cambiar materia de Estudio</Link>
                        <br/>
                        <Link to= "/article" onClick= {this.reloadRender}>Leer artículo</Link>
                    </Router>
                </div>
            </div>
        );
    };
};

export default HomeView;