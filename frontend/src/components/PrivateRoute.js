import React from 'react';
import { Component } from 'react';
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

//SOLUTION PARA QUE NO ROMPA: faltaba el return de la funcion flecha dejo de romper el codigo pero NO funciona
//boolean auth true ? <Component {...props} /> (no redirecciona trae el component ej:Task) and boolean auth false : <Redirect to="/login" /> (ruta sin nada por ahora)
//export const PrivateRoute = ({ component: Component, auth = true, ...rest }) => {
//    return (
//        <Route {...rest} render={props => {
//            auth
//                ? <Component {...props} />
//                : <Redirect to='/login' />
//        }
//        } />
//    );
//}

//SOLUCION DEFINITIVA: RETORNAR EN CADA SALIDA DE CODIGO, NO UN RETURN GENERAL COMO ARRIBA
export const PrivateRoute = ({ component: Component, auth = true, ...rest }) => {
    return (
        <Route
            {...rest} 
            render={props => {
                if(auth){
                    return <Component {...props}/>
                }
                else{
                    return <Redirect to='/login' />
                }
                
                
            }}
        />
    );
}



