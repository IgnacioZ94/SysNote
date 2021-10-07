import React, {Component} from "react";
import { connect } from "react-redux";
import { Router } from 'react-router-dom';
import history from "./_helpers/history";
import {PrivateRoute}  from './components/PrivateRoute';
import {Task} from './Task/task';

class App extends Component {
    render(){
        return (

            //<Router history={history}>
            //    <PrivateRoute exat path="/" componet={Task} /> 
            //</Router>


            //<Router history={history}>
            //    <PrivateRoute path="/" componet={Task} /> ERROR EN PrivateRoute al querer traerlo de componets y levantar el front rompe
            //</Router>


            //Esto anda por ejemplo
            <Router history={history}>
                <h1>Hello word</h1>    
            </Router>

        )
    }
}

const appComponent = connect()(App);

export {appComponent as App}