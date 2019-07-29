import React, {Component} from 'react';

import './PickDate.css';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import './Calendar.css'

class CalendarOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lunes: false,
            martes: false,
            miercoles: false,
            jueves: false,
            viernes: false,
            sabado: false,
            domingo: false,
            completedCalendar: false,
        };

        this.notificationGenerator = this.notificationGenerator.bind(this);

        this.lunesState = this.lunesState.bind(this);
        this.martesState = this.martesState.bind(this);
        this.miercolesState = this.miercolesState.bind(this);
        this.juevesState = this.juevesState.bind(this);
        this.viernesState = this.viernesState.bind(this);
        this.sabadoState = this.sabadoState.bind(this);
        this.domingoState = this.domingoState.bind(this);
        
        this.submitDateNotification = this.submitDateNotification.bind(this);
        this.reloadRender = this.reloadRender.bind(this);
    };

    notificationGenerator() {
        Notification.requestPermission().then(function(result) {

            function builtNotification(title, body, icon, requireInteraction) {
                const options = {
                    body: body,
                    icon: icon,
                    requireInteraction: requireInteraction
                };
                return new Notification(title, options);
            };

            function generateNotification () {
                builtNotification(
                    "Notificación de Turing.",
                    "Te recordamos leer tú Artículo.",
                    "gearIcon.png",
                    true
                );
            };

            setTimeout(generateNotification, 1000);
        });
    };

    lunesState () {
        this.setState({lunes: !this.state.lunes});
    };

    martesState () {
        this.setState({martes: !this.state.martes});
    };

    miercolesState () {
        this.setState({miercoles: !this.state.miercoles});
    };

    juevesState () {
        this.setState({jueves: !this.state.jueves});
    };

    viernesState () {
        this.setState({viernes: !this.state.viernes});
    };

    sabadoState () {
        this.setState({sabado: !this.state.sabado});
    };

    domingoState () {
        this.setState({domingo: !this.state.domingo});
    };

    submitDateNotification (event) {
        event.preventDefault();
        const savedUserName = JSON.parse(localStorage.getItem('savedUsername'));
        const savedAvatar = JSON.parse(localStorage.getItem('savedAvatar'));
        const userSubjectStored = JSON.parse(localStorage.getItem("subjectInformation"));

        localStorage.clear();

        localStorage.setItem('dateNotifications', JSON.stringify(this.state));
        localStorage.setItem('savedUsername', JSON.stringify(savedUserName));
        localStorage.setItem('savedAvatar', JSON.stringify(savedAvatar));
        localStorage.setItem('subjectInformation', JSON.stringify(userSubjectStored));
        this.setState({completedCalendar: true});
    };

    // Class method, will Reload window for Rendering new component.
    reloadRender () {
        setTimeout(() => {window.location.reload()}, 100);
    };

    render() {

        return (
            <div>
                <h1 onClick = {this.notificationGenerator}>Calendario</h1>
                <p>Hola usuario, ingresa los días que vas a leer</p>
                <form id="date-form">
                    <div>
                        <label htmlFor="lunes-checker">Lunes</label>
                        <label class="switch">
                            <input id="lunes-checker" type="checkbox" onChange={this.lunesState}  value={this.state.lunes}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="martes-checker">Martes</label>
                        <label class="switch">
                            <input id="martes-checker" type="checkbox" onChange={this.martesState}  value={this.state.martes}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="miercoles-checker">Miércoles</label>
                        <label class="switch">
                            <input id="miercoles-checker" type="checkbox" onChange={this.miercolesState}  value={this.state.miercoles}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="jueves-checker">Jueves</label>
                        <label class="switch">
                            <input id="jueves-checker" type="checkbox" onChange={this.juevesState}  value={this.state.jueves}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="viernes-checker">Viernes</label>
                        <label class="switch">
                            <input id="viernes-checker" type="checkbox" onChange={this.viernesState}  value={this.state.viernes}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="sabado-checker">Sábado</label>
                        <label class="switch">
                            <input id="sabado-checker" type="checkbox" onChange={this.sabadoState}  value={this.state.sabado}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="domingo-checker">Domingo</label>
                        <label class="switch">
                            <input id="domingo-checker" type="checkbox" onChange={this.domingoState}  value={this.state.domingo}/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <button type="submit" onClick={this.submitDateNotification}>Guardar Calendario</button>
                </form>

                <div className = {`${this.state.completedCalendar? "openedModal" : "closedModal"}`}>
                    <Router>
                        <Link to= "/home" onClick= {this.reloadRender}>Terminar registro de Calendario.</Link>
                    </Router>
                </div>
            </div>
        );
    }
};

export default CalendarOptions;