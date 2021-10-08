import React from 'react';
import {Route , Redirect} from 'react-router-dom';

//PROBLEM: falta el return de la funcion flecha
//export const PrivateRoute = ({ component: Component, auth = true, ...rest }) => (
//    <Route {...rest} render={props => (
//        auth
//            ? <Component {...props} />
//            : <Redirect to="/login" />
//    )
//    } />
//)

//SOLUTION: faltaba el return de la funcion flecha
//boolean auth true ? <Component {...props} /> (no redirecciona trae el component ej:Task) and boolean auth false : <Redirect to="/login" /> (ruta sin nada por ahora)
export const PrivateRoute = ({ component: Component, auth = true, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            auth
                ? <Component {...props} />
                : <Redirect to="/login" />
        }
        } />
    );
}



