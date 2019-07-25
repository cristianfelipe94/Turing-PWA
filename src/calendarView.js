import React, {Component} from 'react';

import './PickDate.css';

class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.notificationGenerator = this.notificationGenerator.bind(this);
        this.inputValue = this.inputValue.bind(this);
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

    inputValue (e) {
        console.log(e.target.value);
    };


    render() {

        return (
            <div>
                <h1 onClick = {this.notificationGenerator}>Calendario</h1>
                <p>Hola usuario, ingresa los días que vas a leer</p>
                <div>
                    <label htmlFor="lunes-checker">Lunes</label>
                    <label class="switch">
                        <input type="checkbox" id="lunes-checker" onChange={this.inputValue} value="lunes-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="martes-checker">Martes</label>
                    <label class="switch">
                        <input type="checkbox" id="martes-checker" value="martes-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="miercoles-checker">Miércoles</label>
                    <label class="switch">
                        <input type="checkbox" id="miercoles-checker" value="miercoles-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="jueves-checker">Jueves</label>
                    <label class="switch">
                        <input type="checkbox" id="jueves-checker" value="jueves-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="viernes-checker">Viernes</label>
                    <label class="switch">
                        <input type="checkbox" id="viernes-checker" value="viernes-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="sabado-checker">Sábado</label>
                    <label class="switch">
                        <input type="checkbox" id="sabado-checker" value="sabado-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <label htmlFor="domingo-checker">Domingo</label>
                    <label class="switch">
                        <input type="checkbox" id="domingo-checker" value="domingo-checked"/>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        );
    }
};

export default CalendarView;