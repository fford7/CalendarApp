import React from 'react';
import CalendarScreen from '../Componentes/Calendario/CalendarScreen';
import LoginScreen from '../Componentes/Auth/LoginScreen';
import {
    BrowserRouter as Router,
    Switch,

    Route
} from "react-router-dom";

function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/' component={CalendarScreen} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter