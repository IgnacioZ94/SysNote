import React, {Component} from "react";
import { connect } from "react-redux";
import { Router , Switch , Route , BrowserRouter} from 'react-router-dom';
import history from "./_helpers/history";
import {PrivateRoute}  from './components/PrivateRoute';
import {Task} from './Task/task';

class App extends Component {
    render(){
        return (

            <Router history={history}>
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