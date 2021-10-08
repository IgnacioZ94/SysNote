import React, {Component} from "react";
import { connect } from "react-redux";
import { Router , Switch , Route} from 'react-router-dom';
import history from "./_helpers/history";
import {PrivateRoute}  from './components/PrivateRoute';
import {Task} from './Task/task';

class App extends Component {
    render(){
        return (
            
            
            //Code que DeberiA traer el componente Class Task con el const PrivateRoute, NO funciona no trae al front <h1>Dentro de Tareas</h1> del componet TASK
            //REVISAR PrivateRoute and componet Task
            //<Router history={history}>
            //    <PrivateRoute exat path="/" componet={Task} /> 
            //</Router>
            
            //*1*Intento fallido de traer componente Task como const en vez de Task Class
            //<Router history={history}>
            //    <Route exact path="/" componet={Task}/> 
            //</Router>

            //La creacion de la clase App y el llamado en el index.js y la utilizacion de el render() funcionan bien porque el h1 se refleja Hello Word en el frontend
            <Router history={history}>
                <h1>Hello Worddd</h1>
            </Router>
        )
    }
}

const appComponent = connect()(App);

export {appComponent as App}