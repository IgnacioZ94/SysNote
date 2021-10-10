import React, {Component} from "react";
import { connect } from "react-redux";
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import history from "./_helpers/history";
import {PrivateRoute}  from './components/PrivateRoute';
import {Task} from './Task/task';
import { Register } from './auth/register';
import { Login } from './auth/login';
import { Auth } from './auth/index';
import './app.css'
class App extends Component {
    render(){
        return (

            <Router history={history}>
                <Route path='/auth' component={Auth}/>
                <PrivateRoute exact path='/' component={Task}/>
            </Router>

            //ESTO FUNCIONA LRPM cuando utilizo el PrivateRoute, no funciona
            //ESTABA MAL LA LOGICA EN EL PrivateRoute.js
            //<Router history={history}>
            //    <Route exact path='/' component={Task}/>
            //</Router>

            //Asi probamos que nuestro componente funcione y se vea reflejando en el front
            //<Task />
            //<Route component={Task}/>

        )
    }
}

const appComponent = connect()(App);

export {appComponent as App}